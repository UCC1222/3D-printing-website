import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Prints from './src/pages/Prints';
import Pricing from './src/pages/Pricing';
import Contact from './src/pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ 只在这里渲染 */}
      <main className="min-h-screen px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}