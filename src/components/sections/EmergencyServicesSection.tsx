
import { Phone, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmergencyServicesSection = () => {
  const emergencyServices = [
    {
      icon: Heart,
      title: "Medical Emergency",
      description: "Doctor visits, medicine delivery, hospital coordination",
      responseTime: "< 2 hours",
      availability: "24/7",
      color: "red"
    },
    {
      icon: Phone,
      title: "Urgent Support",
      description: "Immediate assistance, welfare checks, emergency supplies",
      responseTime: "< 1 hour",
      availability: "24/7",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Safety Assistance",
      description: "Home security, emergency repairs, safety equipment",
      responseTime: "< 4 hours",
      availability: "24/7",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Phone className="text-red-600 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Emergency Care Services
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When urgent care is needed, we're here 24/7 to help your loved ones, no matter where you are
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {emergencyServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`w-10 h-10 text-${service.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time:</span>
                    <span className={`font-bold text-${service.color}-600`}>{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-bold text-green-600">{service.availability}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="text-red-600 w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Emergency Hotline</h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            For immediate assistance, our emergency team is available 24/7 across all time zones
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="font-bold text-red-600">Americas</div>
              <div className="text-gray-800">+1-800-STYLO-US</div>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="font-bold text-red-600">Europe & Africa</div>
              <div className="text-gray-800">+44-800-STYLO-EU</div>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <div className="font-bold text-red-600">Asia Pacific</div>
              <div className="text-gray-800">+91-800-STYLO-IN</div>
            </div>
          </div>
          
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full">
            Save Emergency Contacts
          </Button>
        </div>
      </div>
    </section>
  );
};
