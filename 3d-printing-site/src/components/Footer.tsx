import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-bold mb-2">Lucas 3D Printing</div>
          <div className="text-gray-400">One-stop 3D printing service to bring your ideas to life.</div>
        </div>

      </div>
    </footer>
  );
} 