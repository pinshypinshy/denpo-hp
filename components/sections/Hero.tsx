import Image from "next/image";
import Button from "@/components/ui/Button";

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
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#D89B1D]">
          DENPO / Student Beekeeping Collective
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
          伝蜂
          <span className="mt-4 block text-2xl font-normal leading-relaxed text-white/90 md:text-3xl">
            ミツバチの営みを、学びと贈りものに変えて届ける。
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
          学校に養蜂を届けること。採れた蜂蜜に想いを添えて届けること。
          伝蜂は、自然の循環を手で触れられる体験として社会にひらく学生団体です。
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/products">商品を購入する</Button>
          <Button href="/projects" variant="secondary">
            学校向け導入案内
          </Button>
          <Button href="/corporate" variant="secondary">
            企業向け導入案内
          </Button>
        </div>
      </div>
    </section>
  );
}
