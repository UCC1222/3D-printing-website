import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <section className="py-16">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
} 