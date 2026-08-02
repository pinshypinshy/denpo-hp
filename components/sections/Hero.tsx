import { Yuji_Syuku } from "next/font/google";
import Image from "next/image";

const yujiSyuku = Yuji_Syuku({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-black text-white">
      <Image
        src="/images/hero_main.jpg"
        alt="採蜜に取り組む伝蜂の活動風景"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.22)_100%)]" />
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-center">
          <h1 className={`${yujiSyuku.className} text-5xl leading-[1.05] sm:text-6xl lg:text-7xl`}>
            伝蜂
          </h1>
          <div className="mx-auto mt-8 max-w-2xl space-y-3 text-base leading-8 text-white/80 sm:text-lg">
            <p>学校に養蜂を届けること。</p>
            <p>採れた蜂蜜に想いを添えて届けること。</p>
            <p>伝蜂は、自然の循環を手で触れられる体験として社会にひらく学生団体です。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
