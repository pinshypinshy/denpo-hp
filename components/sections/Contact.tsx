import Button from "@/components/ui/Button";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionIntro eyebrow="Get in touch" title="学校・企業の導入、商品、取材のご相談へ。">
          <p>
            学校・企業への養蜂導入のご検討、商品に関するお問い合わせ、活動への協力相談など、
            まずは伝蜂の活動アカウントからご連絡ください。
          </p>
        </SectionIntro>

        <div className="rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] p-7 text-white shadow-[0_12px_32px_rgba(0,0,0,0.16)]">
          <p className="text-sm leading-7 text-white/80">
            設置環境や運用体制、採蜜後の扱いまで、初回相談で整理します。
            具体的な導入検討の前段階でも歓迎です。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href="https://www.instagram.com/denpo_bee"
              variant="secondary"
              external
            >
              Instagramで連絡する
            </Button>
            <Button href="/projects" variant="secondary">
              学校向け導入案内
            </Button>
            <Button href="/corporate" variant="secondary">
              企業向け導入案内
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
