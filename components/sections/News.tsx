import SectionIntro from "@/components/ui/SectionIntro";

export type NewsItem = {
  date: string;
  title: string;
  body: string;
  tag: string;
};

/** Phase 3 で Notion API からの取得に差し替える予定のデータ。 */
export const newsItems: NewsItem[] = [
  {
    date: "2026年5月30日",
    title: "初回採蜜 40kg 達成",
    body: "慶應義塾志木高校にて初回採蜜を実施。生徒たちと共に40kgのはちみつを収穫しました。",
    tag: "実績",
  },
  {
    date: "2026年4月17日",
    title: "セイヨウミツバチ導入",
    body: "慶應義塾志木高校へのBee Project本格スタート。セイヨウミツバチ1群を導入しました。",
    tag: "プロジェクト",
  },
];

type NewsProps = {
  /** 表示件数の上限。未指定なら全件表示。 */
  limit?: number;
  eyebrow?: string;
  title?: string;
};

export default function News({
  limit,
  eyebrow = "News",
  title = "活動の記録を、そのまま届ける。",
}: NewsProps) {
  const items = typeof limit === "number" ? newsItems.slice(0, limit) : newsItems;

  return (
    <section id="news" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={eyebrow} title={title}>
          <p>
            巣箱の様子、採蜜の結果、学校での実施報告。現場で起きたことを随時更新しています。
          </p>
        </SectionIntro>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-3">
                <time className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6333]">
                  {item.date}
                </time>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
