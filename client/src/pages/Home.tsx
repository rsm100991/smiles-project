import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import LiveChatWidget from "@/components/LiveChatWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Add top padding to account for fixed navigation */}
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <ServicesSection />
        
        <TestimonialsSection />
        
        <AboutSection />
        
        <PricingSection />
        
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}