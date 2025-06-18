
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-16">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
} 