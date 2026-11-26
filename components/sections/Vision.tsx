import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandContainer } from "@/components/ui/designTokens";

export default function Vision() {
  return (
    <section id="vision" className="bg-cream px-6 py-20 sm:px-10 sm:py-32">
      <div className={`${brandContainer} grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16`}>
        <SectionIntro eyebrow="Our Vision" title="子どもたちの学びのそばに、もう一度自然を。" />
        <div className="max-w-md text-base leading-8 text-ink-soft">
          <p>巣箱を開けると、昨日とは違う景色がある。花粉の色、蜜の香り、季節ごとに変わるミツバチの営み。伝蜂は、そんな発見が生まれる場所を学校につくっています。</p>
          <Link href="/projects" className="mt-6 inline-block border-b border-bark pb-1 text-sm font-semibold text-bark hover:text-ink">
            学校養蜂について知る <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
