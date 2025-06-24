
import { Code, Users, Globe, Shield } from "lucide-react";

export const DevelopmentProgressSection = () => {
  const progressItems = [
    {
      category: "Platform Development",
      progress: 75,
      icon: Code,
      color: "blue",
      items: ["Core API", "User Authentication", "Payment Integration", "Mobile Apps"]
    },
    {
      category: "Partner Network",
      progress: 60,
      icon: Users,
      color: "green",
      items: ["Service Provider Onboarding", "Quality Standards", "Regional Coverage", "Partnership Agreements"]
    },
    {
      category: "Global Infrastructure",
      progress: 45,
      icon: Globe,
      color: "orange",
      items: ["Multi-Currency Support", "Regional Compliance", "Local Regulations", "Language Localization"]
    },
    {
      category: "Security & Compliance",
      progress: 80,
      icon: Shield,
      color: "purple",
      items: ["Data Protection", "Financial Security", "Identity Verification", "Fraud Prevention"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return { bg: "bg-blue-100", text: "text-blue-600", progress: "bg-blue-600" };
      case "green": return { bg: "bg-green-100", text: "text-green-600", progress: "bg-green-600" };
      case "orange": return { bg: "bg-orange-100", text: "text-orange-600", progress: "bg-orange-600" };
      case "purple": return { bg: "bg-purple-100", text: "text-purple-600", progress: "bg-purple-600" };
      default: return { bg: "bg-gray-100", text: "text-gray-600", progress: "bg-gray-600" };
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Development Progress
          </h2>
          <p className="text-xl text-gray-600">
            Building the future of cross-border care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {progressItems.map((item, index) => {
            const IconComponent = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.category}</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Progress</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${colors.progress} rounded-full`}></div>
                      <span className="text-gray-700">{subItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
