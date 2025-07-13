
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Gift } from "lucide-react";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [interestedServices, setInterestedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const serviceOptions = [
    "Food & Groceries",
    "Gifts & Flowers", 
    "Home Services",
    "Healthcare",
    "Transportation",
    "All Services"
  ];

  const handleServiceToggle = (service: string) => {
    setInterestedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !country) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([
          {
            name,
            email,
            country,
            interested_services: interestedServices,
            early_access_bonus: true,
            notification_preferences: { email: true, sms: false }
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success! 🎁",
        description: "You've been added to our early access waitlist with 1000 FREE credits! We'll notify you when Stylo launches!",
      });

      setEmail("");
      setName("");
      setCountry("");
      setInterestedServices([]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-section" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Early Bird Banner */}
          <div className="bg-accent-gradient rounded-xl p-4 mb-8 shadow-elevated transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-accent-foreground" />
              <span className="text-accent-foreground font-bold text-lg">🎁 Early Bird Special: Get 1000 FREE Credits!</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Early Access Waitlist
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Be among the first to experience Stylo when we launch in December 2025
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent backdrop-blur-sm"
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent backdrop-blur-sm"
              required
            />
            
            {/* Services Interest Section */}
            <div className="bg-glass rounded-lg p-6 mb-6 border border-border">
              <h3 className="text-foreground font-semibold text-lg mb-4 text-left">
                Which services are you most interested in? (Optional)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={interestedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                      className="border-border data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                    />
                    <label
                      htmlFor={service}
                      className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cta-gradient hover:scale-105 text-cta-foreground py-3 px-8 rounded-lg font-semibold text-lg shadow-elevated transition-all duration-300"
            >
              {isSubmitting ? "Joining..." : "Get Early Access + 1000 FREE Credits"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
