import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Visit our showroom or reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border shadow-card hover:shadow-luxury transition-all hover:scale-105 animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
              <p className="text-muted-foreground text-sm">
                support@jewelleryhub.com
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-card hover:shadow-luxury transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm">
                +91 98765 43210
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-card hover:shadow-luxury transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
              <p className="text-muted-foreground text-sm">
                123 Jewel Street, Mumbai
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
