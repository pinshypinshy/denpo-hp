// お問い合わせ受付API（Cloudflare Pages Functions）
// POST /api/contact : Turnstile検証 → Resendで通知メール＋自動返信を送信

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO_EMAIL: string;
}

interface ContactBody {
  inquiryType: string;
  name: string;
  email: string;
  message: string;
  turnstileToken: string;
}

// Resendのドメイン検証（denpobee.com）が済んでいるアドレスであること
const FROM_ADDRESS = "伝蜂 <noreply@denpobee.com>";

const FIELD_LIMITS = {
  inquiryType: 50,
  name: 100,
  email: 254,
  message: 5000,
} as const;

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseBody(raw: unknown): ContactBody | null {
  if (typeof raw !== "object" || raw === null) return null;
  const body = raw as Record<string, unknown>;
  const fields = ["inquiryType", "name", "email", "message", "turnstileToken"] as const;
  for (const field of fields) {
    if (typeof body[field] !== "string" || (body[field] as string).trim() === "") return null;
  }
  for (const [field, limit] of Object.entries(FIELD_LIMITS)) {
    if ((body[field] as string).length > limit) return null;
  }
  if (!isValidEmail(body.email as string)) return null;
  return {
    inquiryType: (body.inquiryType as string).trim(),
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    message: (body.message as string).trim(),
    turnstileToken: body.turnstileToken as string,
  };
}

async function verifyTurnstile(
  secretKey: string,
  token: string,
  remoteIp: string | null,
): Promise<boolean> {
  const params = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) params.set("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  if (!res.ok) return false;
  const result = (await res.json()) as { success: boolean };
  return result.success;
}

async function sendEmail(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    reply_to?: string;
    subject: string;
    text: string;
  },
): Promise<boolean> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Resend API error", res.status, await res.text());
  }
  return res.ok;
}

function buildNotificationText(body: ContactBody): string {
  return [
    "ホームページのお問い合わせフォームから新しいお問い合わせが届きました。",
    "",
    `■ お問い合わせ種別\n${body.inquiryType}`,
    "",
    `■ お名前\n${body.name}`,
    "",
    `■ メールアドレス\n${body.email}`,
    "",
    `■ お問い合わせ内容\n${body.message}`,
    "",
    "---",
    "このメールに返信すると、お問い合わせ者へ直接返信できます。",
  ].join("\n");
}

function buildAutoReplyText(body: ContactBody): string {
  return [
    `${body.name} 様`,
    "",
    "この度は伝蜂（DENPO）へお問い合わせいただき、誠にありがとうございます。",
    "以下の内容でお問い合わせを受け付けました。",
    "担当者より順次ご連絡いたしますので、今しばらくお待ちください。",
    "",
    `■ お問い合わせ種別\n${body.inquiryType}`,
    "",
    `■ お問い合わせ内容\n${body.message}`,
    "",
    "---",
    "本メールは自動送信です。このメールへの返信には対応できかねます。",
    "",
    "伝蜂（DENPO）",
    "https://denpobee.com",
    "Instagram: https://www.instagram.com/denpo_bee",
  ].join("\n");
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ error: "リクエスト形式が不正です。" }, 400);
  }

  const body = parseBody(raw);
  if (!body) {
    return json({ error: "入力内容に不備があります。" }, 400);
  }

  const turnstileOk = await verifyTurnstile(
    env.TURNSTILE_SECRET_KEY,
    body.turnstileToken,
    request.headers.get("CF-Connecting-IP"),
  );
  if (!turnstileOk) {
    return json({ error: "認証に失敗しました。ページを再読み込みしてお試しください。" }, 403);
  }

  const notified = await sendEmail(env.RESEND_API_KEY, {
    from: FROM_ADDRESS,
    to: [env.CONTACT_TO_EMAIL],
    reply_to: body.email,
    subject: `【お問い合わせ】${body.inquiryType}／${body.name}様`,
    text: buildNotificationText(body),
  });
  if (!notified) {
    return json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, 502);
  }

  // 自動返信の失敗はお問い合わせ自体の成立を妨げない
  await sendEmail(env.RESEND_API_KEY, {
    from: FROM_ADDRESS,
    to: [body.email],
    subject: "【伝蜂】お問い合わせを受け付けました",
    text: buildAutoReplyText(body),
  });

  return json({ ok: true }, 200);
}
