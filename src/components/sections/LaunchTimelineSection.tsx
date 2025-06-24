
import { CheckCircle, Clock, Sparkles } from "lucide-react";

export const LaunchTimelineSection = () => {
  const timelineItems = [
    {
      phase: "Q1 2025",
      title: "Partner Network Development",
      description: "Building relationships with local service providers globally",
      status: "in-progress",
      icon: "🤝"
    },
    {
      phase: "Q2 2025",
      title: "Beta Testing Program",
      description: "Limited beta release for early adopters and partners",
      status: "upcoming",
      icon: "🧪"
    },
    {
      phase: "Q3 2025",
      title: "Platform Integration",
      description: "Payment systems, multi-currency support, and mobile apps",
      status: "upcoming",
      icon: "🔗"
    },
    {
      phase: "December 2025",
      title: "Global Launch",
      description: "Full platform launch with 15+ countries supported",
      status: "planned",
      icon: "🚀"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-600 animate-pulse" />;
      case "upcoming":
        return <Sparkles className="w-6 h-6 text-orange-600" />;
      case "planned":
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 border-green-300";
      case "in-progress": return "bg-blue-100 border-blue-300";
      case "upcoming": return "bg-orange-100 border-orange-300";
      case "planned": return "bg-purple-100 border-purple-300";
      default: return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Road to Launch
          </h2>
          <p className="text-xl text-gray-600">
            Our journey to connecting hearts across borders
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-green-300 to-purple-300"></div>
            
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 animate-on-scroll opacity-0 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`p-6 rounded-2xl border-2 shadow-lg ${getStatusColor(item.status)}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-300 flex items-center justify-center shadow-lg">
                  {getStatusIcon(item.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
