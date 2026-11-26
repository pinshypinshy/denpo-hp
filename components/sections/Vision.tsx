import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { brandContainer } from "@/components/ui/designTokens";

export default function Vision() {
  return (
    <section id="vision" className="overflow-hidden bg-shell">
      <div className={`${brandContainer} px-5 py-28 sm:px-8 sm:py-40`}>
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="mb-9 text-xs font-semibold uppercase tracking-[0.3em] text-bark">
            OUR VISION
          </p>

          <h2 className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-semibold leading-[1.4] tracking-[-0.055em] text-ink">
            ミツバチと学び、
            <br />
            <span className="text-bark">自然とつながる。</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-[2.1] text-ink-soft sm:text-lg">
            学校に養蜂を届け、子どもたちが自然や環境を
            身近に感じられる学びをつくります。
          </p>
        </Reveal>
      </div>

      <div className="bg-cream px-5 py-24 sm:px-8 sm:py-36">
        <div className={brandContainer}>
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bark">
              WHY WE DO THIS
            </p>

            <h3 className="mt-7 text-[clamp(1.8rem,3.7vw,3.6rem)] font-semibold leading-[1.5] tracking-[-0.045em] text-ink">
              子どもたちの学びのそばに、
              <br className="hidden sm:block" />
              もう一度、自然を。
            </h3>

            <div className="mt-10 space-y-7 text-base leading-[2.2] text-ink-soft sm:text-lg">
              <p>
                かつて、自然は子どもたちにとって身近な学びの場でした。
                草花に触れ、生きものを観察し、季節の移ろいを感じる。
                そんな日常の中に、たくさんの発見と学びがありました。
              </p>

              <p>
                しかし、身近な緑が減り、自然と触れ合う機会も
                少なくなっている今、自然の中で学び、成長することは、
                少しずつ当たり前ではなくなっています。
              </p>

              <p className="font-medium text-ink">
                だからこそ、私たちは子どもたちの学びのそばに、
                もう一度自然を届けたい。
              </p>

              <p>
                その想いから、伝蜂は学校に養蜂を取り入れる活動をしています。
                小さなミツバチを通して、自然の不思議や命のつながりを知る。
                そんな体験が、新しい発見や未来の環境を考える
                きっかけになることを願っています。
              </p>
            </div>

            <Link
              href="/projects"
              className="group mt-12 inline-flex items-center gap-3 border-b border-bark pb-2 text-sm font-semibold text-ink transition-colors hover:text-bark"
            >
              学校養蜂について知る
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
