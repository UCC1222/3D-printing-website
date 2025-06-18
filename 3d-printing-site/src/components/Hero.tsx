export default function Hero() {
  return (
    <section className="relative h-[420px] md:h-[520px] flex items-center justify-center bg-black">
      <img
        src="/images/carousel1-1.jpg"
        alt="3D printer hero"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10 text-left max-w-2xl px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Bring Your 3D Ideas to Life
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 drop-shadow">
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