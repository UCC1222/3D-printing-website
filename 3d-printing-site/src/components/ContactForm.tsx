import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../firebase';

const storage = getStorage(app);
const db = getFirestore(app);

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !file) return;
    setUploading(true);

    try {
      // 1. 上传文件到 Firebase Storage
      const storageRef = ref(storage, `models/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // 2. 写入 Firestore
      await addDoc(collection(db, 'printRequests'), {
        ...form,
        modelUrl: downloadURL,
        timestamp: new Date(),
      });

      // 3. 可选：使用 EmailJS 或 Firebase Functions 发送通知邮件

      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  if (submitted) {
    return <div className="text-green-400 text-center py-8">Thank you! Your model has been submitted.</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-neutral-900 text-gray-200 rounded-xl shadow-xl p-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-white">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

      <input
        type="file"
        accept=".stl,.obj,.zip"
        onChange={handleFileChange}
        className="w-full bg-black text-gray-200 file:bg-orange-400 file:hover:bg-orange-500 file:text-white file:px-4 file:py-2 file:rounded file:border-0 file:cursor-pointer"
        required
      />

      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
      >
        {uploading ? 'Uploading...' : 'Send Message'}
      </button>
    </form>
  );
}