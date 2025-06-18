export default function Hero() {
  return (
    <section className="relative h-[550px] md:h-[640px] flex items-center justify-start bg-black">
      <img
        src="/images/3d-background.jpg"
        alt="3D printer hero"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-left max-w-4xl px-8 md:px-16">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
          Bring Your 3D Ideas to Life
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          Custom 3D printing services tailored to your creativity.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}