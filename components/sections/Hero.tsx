import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_main.jpg"
          alt="採蜜の様子とミツバチ"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
      </div>

      <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            Student Beekeeping Group
          </p>
          <h1 className="text-5xl font-semibold tracking-[0.16em] text-white sm:text-6xl lg:text-7xl">
            伝蜂
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            ひとつの巣から、学びと贈りものをつなぐ。伝蜂は、学校と自然のつながりを、
            しなやかに育てる学生養蜂団体です。
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://stores.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              はちみつを購入する
            </a>
            <a
              href="#project"
              className="rounded-full border border-orange-400 bg-orange-500/90 px-8 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              学校への導入を検討する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
