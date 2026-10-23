import Image from "next/image";
import { brandContainer, brandSection } from "@/components/ui/designTokens";

export default function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-ink text-white">
      {/* 写真は暗くしない。白い防護服や道に白文字が重なるため、ロゴと本文に全周の影を付けて読ませる。 */}
      {/* 人物が左寄りに写っており、スマホ幅の中央基準だと左端の人物が切れる。少し左を基準にする。 */}
      <Image
        src="/images/activity_carrying_tools_01.jpg"
        alt="台車で養蜂道具を運ぶ伝蜂の活動風景"
        fill
        priority
        sizes="100vw"
        className="anim-zoom-out object-cover object-[42%_50%]"
      />
      <div
        className={`${brandSection} ${brandContainer} relative flex min-h-[88svh] items-center justify-center lg:px-12`}
      >
        <div className="max-w-3xl text-center">
          <h1 className="anim-fade-up">
            {/* ロゴは黒一色のPNGしかないため、暗い背景では白抜きにして使う（Header と同じ扱い）。 */}
            <Image
              src="/logo/logo_horizontal_black.png"
              alt="伝蜂"
              width={704}
              height={384}
              priority
              className="mx-auto h-16 w-auto brightness-0 invert drop-shadow-[0_0_6px_rgba(0,0,0,0.55)] sm:h-20 lg:h-24"
            />
          </h1>
          {/* 3行は space-y-3 でまとまった1ブロックのため、まとめて1段遅らせる。 */}
          <div className="anim-fade-up anim-delay-1 mx-auto mt-8 max-w-2xl space-y-3 text-base leading-8 text-white text-shadow-[0_0_4px_rgba(0,0,0,0.75),0_0_12px_rgba(0,0,0,0.55)] sm:text-lg">
            <p>学校に養蜂を届けること。</p>
            <p>採れた蜂蜜に想いを添えて届けること。</p>
            <p>伝蜂は、自然の循環を手で触れられる体験として社会にひらく学生団体です。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
