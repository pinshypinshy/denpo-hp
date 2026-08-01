const newsItems = [
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

const tagColors: Record<string, string> = {
  実績: "bg-green-100 text-green-800",
  プロジェクト: "bg-blue-100 text-blue-800",
  イベント: "bg-purple-100 text-purple-800",
};

export default function News() {
  return (
    <section id="news" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          News
        </p>
        <h2 className="mb-12 text-center text-3xl font-semibold text-black sm:text-4xl">
          ニュース
        </h2>

        <div className="mx-auto max-w-2xl space-y-4">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] border border-black/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <time className="text-sm text-black/50">{item.date}</time>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tagColors[item.tag] ?? "bg-black text-white"}`}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-black">{item.title}</h3>
              <p className="text-sm leading-8 text-black/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
