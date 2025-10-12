import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Users, Clock } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Daily Conversations",
    description: "Share your thoughts, dreams, and stories with a caring listener who's always there for you."
  },
  {
    icon: Heart,
    title: "Emotional Support", 
    description: "Find comfort during tough times and celebrate your victories with someone who truly cares."
  },
  {
    icon: Users,
    title: "Safe & Confidential Space",
    description: "Share your thoughts and feelings in a judgment-free environment where your privacy is fully respected."
  },
  {
    icon: Clock,
    title: "Available When You Need",
    description: "Your virtual friend is ready to listen whenever you need companionship or support."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How S-Miles Creates Connection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the value of genuine human connection. Here's how we bridge 
            the distance and bring warmth into your daily life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 h-full"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}