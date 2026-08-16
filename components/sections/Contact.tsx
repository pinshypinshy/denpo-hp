"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandCard, brandContainer, brandSection } from "@/components/ui/designTokens";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          theme: "light" | "dark" | "auto";
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const inquiryTypes = [
  "学校養蜂について",
  "企業養蜂について",
  "商品について",
  "取材・メディア",
  "その他",
];

// 静的出力のためビルド時に焼き込まれる。変更時は再ビルドが必要
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    inquiryType: inquiryTypes[0],
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // ページ間遷移で再マウントされた際も onReady が再実行されるため、二重描画のみ防ぐ
  const renderTurnstile = () => {
    if (!window.turnstile || !widgetContainerRef.current || widgetIdRef.current !== null) return;
    widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      theme: "light",
    });
  };

  useEffect(() => {
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending" || !turnstileToken) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      if (!res.ok) throw new Error(`contact api responded ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      // トークンは使い捨てのため、失敗時はウィジェットを再認証させる
      setTurnstileToken("");
      if (widgetIdRef.current !== null) {
        window.turnstile?.reset(widgetIdRef.current);
      }
    }
  };

  return (
    <section id="contact" className={`${brandSection} bg-white`}>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={renderTurnstile}
        />
      )}
      <Reveal
        stagger
        className={`${brandContainer} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}
      >
        <SectionIntro eyebrow="Contact" title="学校・企業の導入、商品、取材のご相談へ。">
          <p>
            学校・企業への養蜂導入のご検討、商品に関するお問い合わせ、活動への協力相談など、
            まずはフォームからご連絡ください。
          </p>
        </SectionIntro>

        {status === "success" ? (
          <div className={`${brandCard} p-6 sm:p-8`}>
            <p className="text-lg font-semibold text-ink">お問い合わせを受け付けました。</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              ご入力いただいたメールアドレス宛に受付確認メールをお送りしました。
              届かない場合は、迷惑メールフォルダをご確認ください。
              内容を確認のうえ、担当者より順次ご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`${brandCard} p-6 sm:p-8`}>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="inquiryType">
                  お問い合わせ種別
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                >
                  {inquiryTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
                  お名前
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                  placeholder="例：山田 太郎"
                  maxLength={100}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                  placeholder="example@email.com"
                  maxLength={254}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                  placeholder="ご相談内容をお聞かせください。"
                  maxLength={5000}
                  required
                />
              </div>

              <div>
                {TURNSTILE_SITE_KEY ? (
                  <div ref={widgetContainerRef} />
                ) : (
                  <p className="text-sm text-ink-soft">
                    フォームの準備中のため、現在送信できません。
                  </p>
                )}
              </div>
            </div>

            {status === "error" && (
              <p className="mt-6 text-sm font-semibold text-ink" role="alert">
                送信に失敗しました。お手数ですが、再度チェックを完了させてから送信してください。
              </p>
            )}

            <div className="mt-8">
              <Button type="submit" disabled={status === "sending" || !turnstileToken}>
                {status === "sending" ? "送信中…" : "送信する"}
              </Button>
            </div>
          </form>
        )}
      </Reveal>
    </section>
  );
}
