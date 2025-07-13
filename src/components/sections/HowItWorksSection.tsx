
import { Search, CreditCard, Heart } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose",
      description: "Find services and gifts near your loved one.",
      icon: Search,
      color: "pink",
      animation: "animate-pulse"
    },
    {
      number: "2", 
      title: "Send",
      description: "Pay securely in your local currency.",
      icon: CreditCard,
      color: "purple",
      animation: "animate-bounce-gentle"
    },
    {
      number: "3",
      title: "Care",
      description: "Track the order + make them smile.",
      icon: Heart,
      color: "pink",
      animation: "animate-pulse"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            How it Works
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Three simple steps to send care across borders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="text-center animate-on-scroll opacity-0 transition-all duration-800 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card rounded-2xl p-8 hover:border-white/40 transition-all duration-300 group-hover:scale-105 energy-float">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 energy-pulse">
                    <IconComponent className={`w-8 h-8 text-white ${step.animation}`} />
                  </div>
                  
                  <div className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-white font-bold text-lg mb-4 flex items-center justify-center">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 text-lg">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
