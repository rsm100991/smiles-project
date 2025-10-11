import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

//todo: remove mock functionality - replace with real pricing
const pricingPlans = [
  {
    name: "Hourly Plan",
    price: "$19",
    OfferType: "Promotional Offer",
    period: "/hour", 
    description: "Perfect for daily companionship and emotional support",
    popular: false,
    features: [
      "Hourly text based conversations",
      "Emotional support & listening",
      "Flexible scheduling",
      "Email support"
    ]
  },
   {
    name: "Weekly Plan", 
    price: "$89",
    period: "/week",
    description: "Our most popular plan for comprehensive friendship",
    popular: true,
    features: [
      "Daily 60-minute text based conversations",
      "Validity 7 days or 5 sessions", 
      "Emotional support & life stories", 
      "Priority scheduling",
      "Email support",
    ]
  },
  {
    name: "Monthly Plan", 
    price: "$349",
    period: "/month",
    description: "Our most popular plan for comprehensive friendship",
    popular: false,
    features: [
      "Daily 60-minute text based conversations",
      "Validity 60 days or 22 sessions", 
      "Emotional support & life stories", 
      "Priority scheduling",
      "Email support",
    ]
  },
  {
    name: "Quaterly Plan",
    price: "$999", 
    period: "/hour",
    description: "Maximum support for those who need extra companionship",
    popular: false,
    features: [
      "Daily 60-minute text based conversations",
      "Validity 60 days or 22 sessions", 
      "Emotional support & life stories", 
      "Priority scheduling",
      "Email support",
    ]
  }
];

export default function PricingSection() {
  const handleSelectPlan = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Scroll to contact form or open pricing modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Friendship Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable companionship plans designed to fit your needs and bring 
            daily joy into your life.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-elevate transition-all duration-300 relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                  data-testid="badge-popular"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                  <div className="mb-2">
                  <span className="text-1xl font-bold text-primary">{plan.OfferType}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSelectPlan(plan.name)}
                  data-testid={`button-select-${index}`}
                >
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include compassionate, trained virtual friends and a 7-day satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}