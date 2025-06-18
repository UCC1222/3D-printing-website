interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-72 mx-auto">
      <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>
      <div className="text-3xl font-extrabold text-orange-500 mb-4">{price}</div>
      <ul className="mb-6 text-gray-700 text-left w-full list-disc list-inside">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200">
        Get Started
      </button>
    </div>
  );
} 