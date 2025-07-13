
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setInterestedServices(prev => [...prev, service]);
    } else {
      setInterestedServices(prev => prev.filter(s => s !== service));
    }
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
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when Stylo launches!",
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
    <section id="signup-section" className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 energy-pulse">
            Join the Waitlist
          </h2>
          <p className="text-foreground text-lg mb-8">
            Be among the first to experience Stylo when we launch in December 2025
          </p>

          {/* Early Bird Offer Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-lime-100 to-green-100 border-2 border-lime-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 energy-pulse">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🎁</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Early Bird Special: Get 1000 FREE Credits</h3>
            </div>
            <p className="text-green-700 font-medium">
              Join now and receive 1000 credits when we launch - perfect for your first orders!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />

            {/* Services Interest Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">What services are you most interested in?</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <Checkbox
                      id={service}
                      checked={interestedServices.includes(service)}
                      onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors"
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
              className="w-full bg-action-gradient hover:from-red-600 hover:to-orange-600 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 energy-pulse"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
