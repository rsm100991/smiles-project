import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@assets/generated_images/Elderly_hands_holding_in_comfort_f01bc99b.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={aboutImage} 
              alt="Caring hands representing human connection and support"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Story Behind S..Miles
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At S..Miles, we believe that life's journey is about more than just the daily 
                hustle and bustle. It's about finding time for yourself, nurturing social 
                connections, and embracing the symphonies of life.
              </p>
              
              <p>
                Unfortunately, in the fast-paced world we live in, the distance between us 
                and these essential aspects of life keeps growing. That's why we created S..Miles 
                – to bridge that gap, one smile at a time.
              </p>
              
              <p>
                Our name perfectly encapsulates our vision. <strong className="text-primary">"S"</strong> stands 
                for Smile, Social life, and Society, while <strong className="text-primary">"Miles"</strong> symbolizes 
                the distance between us and these vital aspects.
              </p>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-3 text-lg">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To create a world where no one feels alone, where smiles are contagious, 
                  and where the distance between hearts is merely an illusion. We're dedicated 
                  to bringing positivity and cheer into every moment of your life.
                </p>
              </CardContent>
            </Card>
            
            <div className="bg-accent/20 rounded-lg p-6">
              <h4 className="font-medium text-accent-foreground mb-2">What Makes Us Different</h4>
              <p className="text-muted-foreground">
                We don't just provide a service – we create genuine human connections. Our virtual 
                friends are trained to listen, understand, and care about your daily life, your 
                stories, and your dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}