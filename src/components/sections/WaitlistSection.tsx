
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
    <section id="signup-section" className="py-20 bg-gradient-to-b from-purple-800/30 to-purple-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Early Bird Banner */}
          <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl p-4 mb-8 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">🎁 Early Bird Special: Get 1000 FREE Credits!</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Early Access Waitlist
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Be among the first to experience Stylo when we launch in December 2025
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
            
            {/* Services Interest Section */}
            <div className="bg-white/10 rounded-lg p-6 mb-6 backdrop-blur-sm border border-purple-400/30">
              <h3 className="text-white font-semibold text-lg mb-4 text-left">
                Which services are you most interested in? (Optional)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={interestedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                      className="border-purple-400/50 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                    />
                    <label
                      htmlFor={service}
                      className="text-purple-200 text-sm cursor-pointer hover:text-white transition-colors"
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
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Joining..." : "Get Early Access + 1000 FREE Credits"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
