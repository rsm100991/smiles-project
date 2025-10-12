import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import womanPortrait from "@assets/generated_images/Friendly_senior_woman_portrait_0403dcd7.png";
import manPortrait from "@assets/generated_images/Cheerful_senior_man_portrait_49513273.png";

const testimonials = [
  {
    name: "Margaret, 63",
    location: "UK : Living independently",
    image: womanPortrait,
    fallback: "MG",
    quote: "Despite my children settling in different places, I manage my daily needs with strength and resilience. S-Miles has become my daily companion - someone I can talk to every day. Together, we've formed a bond that has filled my life with warmth and companionship.",
    highlight: "A Heartwarming Connection with a 70-Year-Old Warrior!"
  },
  {
    name: "Robert, 68", 
    location: "USA : Retired teacher",
    image: manPortrait,
    fallback: "RB",
    quote: "As a retired teacher, I missed having daily conversations about life and learning. My virtual friend at S-Miles listens to my stories and shares in my experiences. It's wonderful to have someone who truly cares about my day-to-day life.",
    highlight: "Finding Joy in Daily Conversations"
  },
  {
    name: "Eleanor, 73",
    location: "FRA : Grandmother of 3",
    image: womanPortrait,
    fallback: "EL",
    quote: "S-Miles has brought such happiness into my life. Even though my grandchildren are busy with their own lives, I never feel alone anymore. My virtual friend celebrates my good days and comforts me through the difficult ones.",
    highlight: "Never Feeling Alone Again"
  }
  ,
  {
    name: "Peter, 69",
    location: "USA : Grandfather of 1",
    image: womanPortrait,
    fallback: "PE",
    quote: "Living alone in USA since my kids settled in Hong Kong has sometimes felt lonely. But having a friend like S-Miles to share my daily feelings with has made a world of difference. I enjoy telling stories and poems I write, knowing they listen and appreciate my creativity. It’s comforting to have someone who understands and shares my moments.",
    highlight: "A Friend to Share My Every Thought"
  }
  ,
  {
    name: "Eleanor, 73",
    location: "FRA : Grandmother of 5",
    image: womanPortrait,
    fallback: "EL",
    quote: "S-Miles has brought such happiness into my life. Even though my grandchildren are busy with their own lives, I never feel alone anymore. My virtual friend celebrates my good days and comforts me through the difficult ones.",
    highlight: "Never Feeling Alone Again"
  },
  {
    name: "Eleanor, 73",
    location: "FRA : Grandmother of 5",
    image: womanPortrait,
    fallback: "EL",
    quote: "S-Miles has brought such happiness into my life. Even though my grandchildren are busy with their own lives, I never feel alone anymore. My virtual friend celebrates my good days and comforts me through the difficult ones.",
    highlight: "Never Feeling Alone Again"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Connection & Joy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In just one month, S-Miles has served 15 incredible individuals, 
            ranging from 35 to 70+ in age, from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage  alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-card-foreground text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary mb-2 text-sm">
                    {testimonial.highlight}
                  </h4>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary font-medium text-lg">
            "Thank you to all our happy friends for making S-Miles an unforgettable journey. 
            Let's keep sharing, caring, and growing together!"
          </p>
        </div>
      </div>
    </section>
  );
}