
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

export const LiveStatusSection = () => {
  const serviceStatus = [
    { country: "🇺🇸 United States", status: "online", services: 156, waitTime: "15 min" },
    { country: "🇮🇳 India", status: "online", services: 234, waitTime: "12 min" },
    { country: "🇬🇧 United Kingdom", status: "online", services: 89, waitTime: "18 min" },
    { country: "🇨🇦 Canada", status: "limited", services: 67, waitTime: "25 min" },
    { country: "🇦🇺 Australia", status: "online", services: 78, waitTime: "20 min" },
    { country: "🇩🇪 Germany", status: "maintenance", services: 45, waitTime: "N/A" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "limited":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "maintenance":
        return <Clock className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "All Services Available";
      case "limited":
        return "Limited Services";
      case "maintenance":
        return "Under Maintenance";
      default:
        return "Available";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Live Service Status
          </h2>
          <p className="text-xl text-gray-600">
            Real-time availability across our global network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceStatus.map((location, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md animate-on-scroll opacity-0 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">{location.country}</h3>
                {getStatusIcon(location.status)}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    location.status === 'online' ? 'text-green-600' :
                    location.status === 'limited' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {getStatusText(location.status)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Services:</span>
                  <span className="font-medium text-gray-800">{location.services}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Response:</span>
                  <span className="font-medium text-blue-600">{location.waitTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <p className="text-gray-600 italic">
            Last updated: {new Date().toLocaleTimeString()} • Updates every 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
