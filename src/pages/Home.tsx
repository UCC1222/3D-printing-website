import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

function WhyChoose() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/images/carousel2-1.jpg" alt="Why Choose" className="rounded-lg shadow-lg mb-6 md:mb-0" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Lucas 3D Printing</h2>
          <ul className="space-y-4 text-lg text-gray-200">
            <li><span className="font-semibold text-white">Tailored Service</span><br />We adapt to your design needs with precision and care.</li>
            <li><span className="font-semibold text-white">Fast Turnaround</span><br />Quick printing and delivery without compromising quality.</li>
            <li><span className="font-semibold text-white">Affordable Pricing</span><br />Competitive rates for high-quality results.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <WhyChoose />
      <Footer />
    </div>
  );
} 