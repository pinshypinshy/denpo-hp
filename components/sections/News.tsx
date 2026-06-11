const newsItems = [
  {
    date: "2026年5月30日",
    title: "初回採蜜 6.7kg 達成",
    body: "慶應義塾志木高校にて初回採蜜を実施。生徒たちと共に6.7kgのはちみつを収穫しました。",
    tag: "実績",
  },
  {
    date: "2026年4月17日",
    title: "セイヨウミツバチ導入",
    body: "慶應義塾志木高校へのBee Project本格スタート。セイヨウミツバチ1群を導入しました。",
    tag: "プロジェクト",
  },
  {
    date: "2026年11月（予定）",
    title: "三田祭に出店予定",
    body: "慶應義塾大学の学園祭「三田祭」にて蜂蜜レモネード・瓶販売を出店予定。ぜひお越しください！",
    tag: "イベント",
  },
];

const tagColors: Record<string, string> = {
  実績: "bg-green-100 text-green-800",
  プロジェクト: "bg-blue-100 text-blue-800",
  イベント: "bg-purple-100 text-purple-800",
};

export default function News() {
  return (
    <section id="news" className="py-20 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          News
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          ニュース
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl border border-amber-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <time className="text-sm text-gray-500">{item.date}</time>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[item.tag] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
