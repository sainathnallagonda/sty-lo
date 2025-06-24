
import { useState } from "react";
import { CheckCircle, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartnerApplicationModal } from "@/components/PartnerApplicationModal";

export const ServiceProvidersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partnerLogos = [
    { name: "FreshDirect", country: "🇺🇸", category: "Groceries" },
    { name: "BigBasket", country: "🇮🇳", category: "Groceries" },
    { name: "Interflora", country: "🇬🇧", category: "Flowers" },
    { name: "TaskRabbit", country: "🇺🇸", category: "Home Services" },
    { name: "Urban Company", country: "🇮🇳", category: "Home Services" },
    { name: "Deliveroo", country: "🇬🇧", category: "Food Delivery" }
  ];

  const qualityStandards = [
    "Background-verified service providers",
    "24/7 quality monitoring",
    "Real-time service tracking",
    "Money-back guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-green-600 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Trusted Local Partners
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building relationships with vetted local service providers in each country to ensure quality and reliability
          </p>
        </div>

        {/* Partner Network Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {partnerLogos.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center animate-on-scroll opacity-0 hover:shadow-lg transition-all duration-300 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-2 right-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Preview
                </span>
              </div>
              <div className="text-3xl mb-3">{partner.country}</div>
              <h3 className="font-bold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.category}</p>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mb-12 animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-600 w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Quality Assurance Standards</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{standard}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Join as Partner CTA */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Are you a local service provider?
            </h3>
            <p className="text-gray-700 mb-6">
              Join our network and help families care for their loved ones across borders. 
              Early partners get priority placement and reduced commission rates!
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-700 mb-4">
              <span className="text-sm font-semibold">🎯 Early Partner Benefits:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 mb-6">
              <div>✨ Reduced commission rates</div>
              <div>🚀 Priority listing placement</div>
              <div>🤝 Direct partnership support</div>
            </div>
          </div>
          
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Apply to Become a Partner
          </Button>
        </div>
      </div>

      <PartnerApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
