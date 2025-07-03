
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PartnerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerApplicationModal = ({ isOpen, onClose }: PartnerApplicationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    website: "",
    description: "",
    servicesOffered: [] as string[],
    experienceYears: ""
  });

  const serviceOptions = [
    "Food Delivery", "Grocery Delivery", "Flower Delivery", "Gift Delivery",
    "Home Services", "Healthcare Services", "Transportation", "Emergency Services",
    "Personal Care", "Pet Services", "Other"
  ];

  const countries = [
    "United States", "India", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "Brazil", "Mexico", "Other"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      servicesOffered: checked 
        ? [...prev.servicesOffered, service]
        : prev.servicesOffered.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('partner_applications')
        .insert({
          business_name: formData.businessName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          business_type: formData.businessType,
          website: formData.website,
          description: formData.description,
          services_offered: formData.servicesOffered,
          experience_years: formData.experienceYears ? parseInt(formData.experienceYears) : null
        });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        businessType: "",
        website: "",
        description: "",
        servicesOffered: [],
        experienceYears: ""
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-purple-900 to-purple-800 border border-pink-400/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Partner Application
          </DialogTitle>
          <DialogDescription className="text-purple-200">
            Join our network of trusted service providers
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Country *
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="" className="bg-purple-800">Select Type</option>
                <option value="restaurant" className="bg-purple-800">Restaurant</option>
                <option value="grocery" className="bg-purple-800">Grocery Store</option>
                <option value="service" className="bg-purple-800">Service Provider</option>
                <option value="retail" className="bg-purple-800">Retail</option>
                <option value="other" className="bg-purple-800">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Website
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="https://"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Business Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Tell us about your business..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Years of Experience
            </label>
            <input
              type="number"
              value={formData.experienceYears}
              onChange={(e) => setFormData({ ...formData, experienceYears: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              min="0"
              max="100"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-purple-400/30 text-purple-200 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
