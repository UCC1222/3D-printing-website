import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Customer Prints', path: '/prints' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Lucas 3D Printing</div>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:text-orange-400 transition-colors duration-200 ${location.pathname === item.path ? 'text-orange-400' : ''}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 