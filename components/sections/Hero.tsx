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
        <p className="mb-5 text-sm font-semibold text-cream">伝蜂 / DENPO</p>
        <h1 className="text-3xl font-medium leading-[1.45] sm:text-5xl lg:text-7xl">
          ミツバチと学び、<br />自然とつながる。
        </h1>
      </div>
    </section>
  );
}
