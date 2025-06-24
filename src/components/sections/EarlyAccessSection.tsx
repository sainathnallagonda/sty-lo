
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Star, Gift, Rocket } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const EarlyAccessSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    useCase: "",
    interestedServices: [] as string[],
    referralSource: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = ["Food Delivery", "Gifts", "Home Services", "Healthcare", "Emergency Services", "Other"];
  const countries = ["United States", "India", "United Kingdom", "Canada", "Australia", "Germany", "Other"];
  const referralSources = ["Social Media", "Search Engine", "Friend/Family", "News Article", "Advertisement", "Other"];

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
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert({
          name: formData.name,
          email: formData.email,
          country: formData.country,
          use_case: formData.useCase,
          interested_services: formData.interestedServices,
          referral_source: formData.referralSource
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Welcome to Early Access!",
        description: "You'll be among the first to experience Stylo when we launch.",
      });

      // Show thank you section
      setTimeout(() => {
        document.getElementById('thank-you-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join early access. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return null; // Hide form after submission
  }

  return (
    <section id="signup-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="text-blue-600 w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Get Early Access
              </h2>
            </div>
            <p className="text-xl text-blue-600 font-medium mb-4">
              Be among the first to send care beyond borders.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Early Access Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Beta testing access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-green-500" />
                  <span>Exclusive launch discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-blue-500" />
                  <span>Priority customer support</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium text-gray-700">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-lg p-4"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-lg p-4"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700">Your Country *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                  <SelectTrigger className="mt-2 rounded-xl border-2 border-gray-200 text-lg p-4 h-auto">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="useCase" className="text-lg font-medium text-gray-700">How do you plan to use Stylo?</Label>
                <Textarea
                  id="useCase"
                  value={formData.useCase}
                  onChange={(e) => setFormData(prev => ({ ...prev, useCase: e.target.value }))}
                  className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-500"
                  placeholder="e.g., Send groceries to my parents in India, surprise my friend with flowers..."
                  rows={3}
                />
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700 mb-4 block">Interested Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  {services.map(service => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        checked={formData.interestedServices.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        className="rounded-lg"
                      />
                      <Label htmlFor={service} className="text-lg text-gray-700 cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700">How did you hear about us?</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}>
                  <SelectTrigger className="mt-2 rounded-xl border-2 border-gray-200 text-lg p-4 h-auto">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {referralSources.map(source => (
                      <SelectItem key={source} value={source}>{source}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Early Access Program"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
