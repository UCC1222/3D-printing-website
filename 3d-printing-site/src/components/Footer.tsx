import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-bold mb-2">Lucas 3D Printing</div>
          <div className="text-gray-400">One-stop 3D printing service to bring your ideas to life.</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Navigation</div>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/prints">Customer Prints</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 