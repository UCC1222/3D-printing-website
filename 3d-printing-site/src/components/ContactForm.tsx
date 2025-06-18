import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 简单校验
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    // TODO: 可集成EmailJS或Firebase
  };

  if (submitted) {
    return <div className="text-green-500 text-center py-8">Thank you! We will get back to you soon.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="border rounded px-4 py-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="border rounded px-4 py-2"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="border rounded px-4 py-2"
        rows={5}
        required
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
} 