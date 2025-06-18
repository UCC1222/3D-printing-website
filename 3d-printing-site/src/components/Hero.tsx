export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-end justify-start bg-black">
      {/* 背景图 */}
      <img
        src="/images/3d-background.jpg"
        alt="3D printer hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 内容 */}
      <div className="relative z-10 p-10 md:p-20 text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl">
          Bring Your 3D Ideas to Life
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Custom 3D printing services tailored to your creativity.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 shadow-lg"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}