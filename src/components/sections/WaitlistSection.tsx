
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Gift, Star, Phone, Mail, User, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    phone: "",
    interestedServices: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Food Delivery",
    "Grocery Delivery", 
    "Flower Delivery",
    "Gift Delivery",
    "Home Services",
    "Healthcare Services",
    "Transportation",
    "Personal Care"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interestedServices: checked 
        ? [...prev.interestedServices, service]
        : prev.interestedServices.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.country) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            country: formData.country,
            phone: formData.phone || null,
            interested_services: formData.interestedServices,
            notification_preferences: { email: true, sms: false },
            early_access_bonus: true
          }
        ]);

      if (error) throw error;

      toast({
        title: "Welcome to Stylo! 🎉",
        description: "You've joined our waitlist and earned 1000 bonus credits! We'll notify you when we launch.",
      });

      setFormData({
        email: "",
        name: "",
        country: "",
        phone: "",
        interestedServices: []
      });
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
    <section id="signup-section" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Bonus Credits Banner */}
          <div className="text-center mb-8">
            <div className="gradient-primary p-1 rounded-2xl inline-block mb-4">
              <div className="bg-white rounded-xl px-6 py-4 flex items-center gap-3">
                <Gift className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="text-lg font-bold text-foreground">Get 1000 Bonus Credits!</div>
                  <div className="text-sm text-muted-foreground">Limited time offer for early signups</div>
                </div>
                <Star className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>

          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be among the first to experience Stylo when we launch in December 2025
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 border border-primary/10">
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name *
                  </Label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Country *
                  </Label>
                  <input
                    id="country"
                    type="text"
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email *
                  </Label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Contact Number
                  </Label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Services Interest */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium text-lg">
                  What services are you interested in?
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {services.map(service => (
                    <div key={service} className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors">
                      <Checkbox
                        id={service}
                        checked={formData.interestedServices.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label htmlFor={service} className="text-sm text-foreground cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist & Get 1000 Credits"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
