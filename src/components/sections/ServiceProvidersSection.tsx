
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PartnerApplicationModal } from "@/components/PartnerApplicationModal";

export const ServiceProvidersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/50 to-purple-900">
      <div className="container mx-auto px-6">
        {/* Join as Partner CTA */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 max-w-2xl mx-auto mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are you a local service provider?
            </h3>
            <p className="text-purple-200 mb-6">
              Join our network and help families care for their loved ones across borders. 
              Early partners get priority placement and reduced commission rates!
            </p>
            <div className="flex items-center justify-center gap-2 text-pink-300 mb-4">
              <span className="text-sm font-semibold">🎯 Early Partner Benefits:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-purple-200 mb-6">
              <div>✨ Reduced commission rates</div>
              <div>🚀 Priority listing placement</div>
              <div>🤝 Direct partnership support</div>
            </div>
          </div>
          
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
