import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

export default function GiftStory() {
  return (
    <section id="gift" className="bg-[linear-gradient(180deg,#3B352A_0%,#222222_100%)] px-5 py-24 text-white sm:px-8">
      <Reveal
        stagger
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <SectionIntro eyebrow="Gift" title="「電報」のように、想いを届ける。" inverse>
          <p>
            伝蜂（DENPO）という名前は「電報」との語呂合わせです。
            かつて電報が大切な想いを届けたように、私たちは一瓶の蜂蜜を通じて、
            贈る人の気持ちを届けたいと考えています。
          </p>
          <p className="mt-5">
            蜜蝋のシーリングスタンプで封をした手紙風のメッセージカードを添えて。
            ギフトとしての蜂蜜に、開ける瞬間まで含めた体験を持たせます。
          </p>
        </SectionIntro>

        <div className="relative min-h-[360px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/activity_beehive_01.jpg"
            alt="伝蜂の巣箱と養蜂の様子"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
