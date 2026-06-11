export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
            学生養蜂団体
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight mb-6">
            一匹のミツバチから、
            <br />
            未来の学びを。
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            伝蜂（DENPO）は、学校に養蜂を届ける学生団体です。
            採れたての国産はちみつと、学校向けBee Projectで、自然と学びをつなぎます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://stores.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-center"
            >
              はちみつを購入する
            </a>
            <a
              href="#project"
              className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3 rounded-full transition-colors text-center"
            >
              学校への導入を検討する
            </a>
          </div>
        </div>

        {/* Placeholder image */}
        <div className="flex-1 w-full">
          <div className="bg-amber-100 rounded-2xl w-full aspect-video flex items-center justify-center">
            <span className="text-amber-400 text-lg">[ヒーロー画像]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
