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
    <section id="members" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          Members
        </p>
        <h2 className="mb-12 text-center text-3xl font-semibold text-black sm:text-4xl">
          メンバー
        </h2>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
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
                <h3 className="mb-1 text-xl font-semibold text-black">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-[#D89B1D]">{member.role}</p>
                <p className="text-sm leading-8 text-black/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
