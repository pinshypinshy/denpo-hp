import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandContainer } from "@/components/ui/designTokens";

export default function Vision() {
  return (
    <section id="vision" className="bg-cream px-6 py-20 sm:px-10 sm:py-32">
      <div className={`${brandContainer} grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16`}>
        <SectionIntro eyebrow="Our Vision" title="子どもたちの学びのそばに、もう一度自然を。" />
        <div className="max-w-2xl text-base leading-8 text-ink-soft">
          <div className="space-y-5">
            <p>かつて、自然は子どもたちにとって身近な学びの場でした。</p>
            <p>草花に触れ、生きものを観察し、季節の移ろいを感じる。そんな日常の中に、たくさんの発見と学びがありました。</p>
            <p>しかし、身近な緑が減り、自然と触れ合う機会も少なくなっている今、自然の中で学び、成長することは、少しずつ当たり前ではなくなっています。</p>
            <p><strong className="text-brown">だからこそ、私たちは子どもたちの学びのそばに、もう一度自然を届けたい。</strong></p>
            <p>その想いから、伝蜂は学校に養蜂を取り入れる活動をしています。</p>
            <p>小さなミツバチを通して、自然の不思議や命のつながりを知る。</p>
            <p>そんな体験が、子どもたちの新しい発見や、未来の環境を考えるきっかけになることを願っています。</p>
          </div>
          <Link href="/projects" className="mt-6 inline-block border-b border-bark pb-1 text-sm font-semibold text-bark hover:text-ink">
            学校養蜂について知る <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
