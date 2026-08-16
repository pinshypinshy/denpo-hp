import { Yuji_Syuku } from "next/font/google";
import Image from "next/image";
import { brandContainer, brandSection } from "@/components/ui/designTokens";

const yujiSyuku = Yuji_Syuku({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero_main.jpg"
        alt="採蜜に取り組む伝蜂の活動風景"
        fill
        priority
        sizes="100vw"
        className="anim-zoom-out object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.22)_100%)]" />
      <div
        className={`${brandSection} ${brandContainer} relative flex min-h-[88svh] items-center justify-center lg:px-12`}
      >
        <div className="max-w-3xl text-center">
          <h1
            className={`${yujiSyuku.className} anim-fade-up text-5xl leading-[1.05] sm:text-6xl lg:text-7xl`}
          >
            伝蜂
          </h1>
          {/* 3行は space-y-3 でまとまった1ブロックのため、まとめて1段遅らせる。 */}
          <div className="anim-fade-up anim-delay-1 mx-auto mt-8 max-w-2xl space-y-3 text-base leading-8 text-white/80 sm:text-lg">
            <p>学校に養蜂を届けること。</p>
            <p>採れた蜂蜜に想いを添えて届けること。</p>
            <p>伝蜂は、自然の循環を手で触れられる体験として社会にひらく学生団体です。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
