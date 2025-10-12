import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Seniors_connecting_and_smiling_together_4e5b6d7f.png";

export default function HeroSection() {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Scroll to contact form or trigger contact modal
    const contactSection = document.getElementById('pricing');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Beacuase no one should face life alone.
          
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Your virtual friend who will be there for you on a daily basis. 
          No more feeling isolated or unheard – we're just a call away!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="min-h-12 px-8 text-lg bg-primary/90 backdrop-blur-sm border border-primary-border hover-elevate"
            data-testid="button-get-started"
          >
            Get Started Today
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleLearnMore}
            className="min-h-12 px-8 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}