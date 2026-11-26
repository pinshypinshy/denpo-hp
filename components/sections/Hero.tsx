import Image from "next/image";
import { brandContainer } from "@/components/ui/designTokens";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end bg-brown text-cream">
      <Image
        src="/images/activity_carrying_tools_01.jpg"
        alt="台車で養蜂道具を運ぶ伝蜂の活動風景"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[42%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-brown-deep/90 via-transparent to-brown-deep/55" />
      <div className={`${brandContainer} w-full px-6 pt-36 pb-12 sm:px-10 sm:pb-20`}>
        <p className="mb-4 font-serif text-2xl font-medium tracking-normal text-cream sm:text-3xl">
          伝蜂 <span className="text-honey-soft">/</span> DENPO
        </p>
        <h1 className="font-serif text-[1.625rem] font-normal leading-relaxed tracking-normal text-cream-deep sm:text-4xl lg:text-[2.75rem]">
          ミツバチと学び、<br />自然とつながる。
        </h1>
      </div>
    </section>
  );
}
