
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CarSection from '@/components/CarSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CarSection />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
