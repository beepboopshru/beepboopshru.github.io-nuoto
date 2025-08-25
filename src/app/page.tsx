import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_center,hsl(var(--background-start)),hsl(var(--background-end)))]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
