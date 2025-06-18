import PricingCard from '../components/PricingCard';
import Footer from '../components/Footer';

const pricingOptions = [
  {
    title: 'Small Print',
    price: '$10',
    features: ['Up to 10cm', 'PLA/ABS material', 'Basic color', '3-5 days turnaround'],
  },
  {
    title: 'Medium Print',
    price: '$25',
    features: ['Up to 20cm', 'PLA/ABS/PETG', 'Multi-color', '2-4 days turnaround'],
  },
  {
    title: 'Large Print',
    price: '$60+',
    features: ['Up to 40cm', 'All materials', 'Custom color', '1-3 days turnaround'],
  },
];

export default function Pricing() {
  return (
    <div className="bg-black min-h-screen text-gray-200">
      <section className="py-16">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          Pricing
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 px-6">
        {pricingOptions.map((opt, index) => (
            <div
    key={opt.title}
    className={`group bg-neutral-900 text-gray-200 rounded-xl shadow-xl p-8 w-full md:w-[300px] 
                hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 
                ring-0 group-hover:ring-2 group-hover:ring-orange-400 group-hover:ring-offset-2 group-hover:ring-offset-black 
                delay-${index * 100}`}
  >
          <h3 className="text-xl font-semibold mb-2 text-white">{opt.title}</h3>
          <p className="text-3xl font-bold text-orange-400 mb-4">{opt.price}</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-300">
            {opt.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
          <button
            className="bg-orange-400 group-hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg w-full transition-all duration-300 ease-in-out transform group-hover:scale-105 shadow-md"
          >
            Get Started
          </button>
        </div>
      ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}