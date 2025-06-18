import Navbar from '../components/Navbar';
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
    <div className="bg-black min-h-screen">
      <Navbar />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {pricingOptions.map((opt) => (
            <PricingCard key={opt.title} {...opt} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
} 