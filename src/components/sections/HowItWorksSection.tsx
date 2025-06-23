
export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose",
      description: "Find services and gifts near your loved one.",
      icon: "🔍",
      color: "blue"
    },
    {
      number: "2", 
      title: "Send",
      description: "Pay securely in your local currency.",
      icon: "💳",
      color: "green"
    },
    {
      number: "3",
      title: "Care",
      description: "Track the order + make them smile.",
      icon: "❤️",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-on-scroll opacity-0">
            How it Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-on-scroll opacity-0 transition-all duration-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${step.color}-100 flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 transition-all duration-300`}>
                {step.icon}
              </div>
              
              <div className={`inline-block w-8 h-8 rounded-full bg-${step.color}-600 text-white font-bold text-lg mb-4 flex items-center justify-center`}>
                {step.number}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
