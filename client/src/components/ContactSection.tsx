import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import WhatsAppChat from "./LiveChat";

//todo: remove mock functionality - replace with real contact details
const contactDetails = [
  
  {
    icon: Mail,
    title: "Email Us", 
    details: "contact@emirel.uk",
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Friendship Ave, Care City, CC 12345",
    description: "By appointment only"
  },
  
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const message = `Name: ${formData.name}
Age: ${formData.age || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Message: ${formData.message}`;

  try {
    await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        recipient: "918977906617", // Your WhatsApp business number
      }),
    });

    alert("Message sent successfully via WhatsApp!");
    setFormData({ name: "", email: "", phone: "", age: "", message: "" });
  } catch (err) {
    console.error(err);
    alert("Failed to send message");
  }
};


  return (
    <section id="contact" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey with S-Miles? We are here to answer your questions 
            and help you find the perfect friendship plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-contact-${index}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-card-foreground mb-1">
                            {contact.title}
                          </h4>
                          <p className="font-semibold text-primary mb-1">
                            {contact.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

          </div>

          {/* Contact Form */}
          <Card>
            <WhatsAppChat phoneNumber="918977906617" message="Hello! I need support." />

            <CardHeader>
              <h3 className="text-2xl font-semibold text-card-foreground">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 6 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      max="150"
                      value={formData.age}
                      onChange={handleInputChange}
                      data-testid="input-age"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">How can we help you? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your situation and what kind of companionship you're looking for..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button type="submit" className="w-full" data-testid="button-submit-contact">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}