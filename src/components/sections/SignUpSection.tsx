
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const SignUpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    recipientType: "",
    services: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = ["Food", "Gifts", "Help", "Health", "Travel"];
  const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "Germany"];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Show thank you section
    setTimeout(() => {
      document.getElementById('thank-you-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  if (isSubmitted) {
    return null; // Hide form after submission
  }

  const getRecipientEmoji = (type: string) => {
    switch (type) {
      case 'family': return '❤️';
      case 'friend': return '🤝';
      case 'other': return '💝';
      default: return '';
    }
  };

  return (
    <section id="signup-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tell us about your loved one.
            </h2>
            <p className="text-xl text-blue-600 font-medium">
              Let's make magic happen.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-medium text-gray-700">Name</Label>
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
                <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-2 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-lg p-4"
                  required
                />
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700">Your Country</Label>
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
                <Label className="text-lg font-medium text-gray-700">Recipient Type</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, recipientType: value }))}>
                    <SelectTrigger className="rounded-xl border-2 border-gray-200 text-lg p-4 h-auto flex-1">
                      <SelectValue placeholder="Select recipient type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.recipientType && (
                    <span className="text-2xl animate-bounce-gentle">
                      {getRecipientEmoji(formData.recipientType)}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Label className="text-lg font-medium text-gray-700 mb-4 block">Interested Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  {services.map(service => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
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

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Join Stylo Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
