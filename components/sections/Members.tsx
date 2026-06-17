import Image from "next/image";

const members = [
  {
    name: "飯塚",
    role: "共同代表 / 食品衛生責任者",
    bio: "慶應義塾大学在籍。養蜂と食の安全に情熱を持ち、伝蜂の創設メンバーとして活動。保健所との交渉から商品開発まで幅広く担当。",
    image: "/images/member_iizuka.jpg",
  },
  {
    name: "松丸",
    role: "共同代表 / 食品衛生責任者",
    bio: "慶應義塾大学在籍。学校向けBee Projectの企画・運営をリード。ミツバチと子どもたちをつなぐプログラム設計を担当。",
    image: "/images/member_matsumaru.jpg",
  },
];

export default function Members() {
  return (
    <section id="members" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          Members
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          メンバー
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-amber-50 rounded-2xl border border-amber-100 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={`${member.name}の写真`}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-amber-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
