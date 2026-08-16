import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandCard, brandContainer, brandSection } from "@/components/ui/designTokens";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  /** object-cover の表示基準。未指定なら中央。 */
  imagePosition?: string;
};

const members: Member[] = [
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
    // 縦長写真のため、中央基準だと帽子の上端が切れる。上寄りに表示する。
    imagePosition: "object-[50%_25%]",
  },
];

export default function Members() {
  return (
    <section id="members" className={`${brandSection} bg-white`}>
      <div className={brandContainer}>
        <Reveal>
          <SectionIntro eyebrow="Team" title="現場に立つ、二人の共同代表。">
            <p>
              巣箱の管理から保健所との調整、学校への提案まで。
              伝蜂の活動は、実際に手を動かす少人数の運営で成り立っています。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {members.map((member) => (
            <article key={member.name} className={`${brandCard} overflow-hidden`}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={member.image}
                  alt={`${member.name}の写真`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${member.imagePosition ?? ""}`}
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-honey">
                  {member.role}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{member.bio}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
