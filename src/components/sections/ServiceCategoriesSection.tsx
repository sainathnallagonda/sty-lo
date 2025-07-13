
export const ServiceCategoriesSection = () => {
  const services = [
    { 
      name: "Food & Groceries", 
      icon: "🍲", 
      color: "pink",
      description: "Fresh groceries, restaurant meals, special dietary items",
      deliveryTime: "Same day"
    },
    { 
      name: "Gifts & Flowers", 
      icon: "🎁", 
      color: "purple",
      description: "Birthday gifts, flowers, personalized items",
      deliveryTime: "1-2 days"
    },
    { 
      name: "Home Services", 
      icon: "🛠️", 
      color: "pink",
      description: "Cleaning, repairs, maintenance, handyman services",
      deliveryTime: "Scheduled"
    },
    { 
      name: "Healthcare", 
      icon: "🏥", 
      color: "purple",
      description: "Medicine delivery, doctor consultations, health checkups",
      deliveryTime: "Priority"
    },
    { 
      name: "Transportation", 
      icon: "✈️", 
      color: "pink",
      description: "Airport pickup, local transport, travel booking",
      deliveryTime: "On-demand"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-on-scroll opacity-0">
            Our Services
          </h2>
          <p className="text-muted-foreground text-xl animate-on-scroll opacity-0 max-w-2xl mx-auto">
            Everything your loved ones need, delivered locally across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-glass border border-border p-8 rounded-2xl text-center cursor-pointer transform hover:scale-105 hover:border-accent/50 hover:-translate-y-3 transition-all duration-300 animate-on-scroll opacity-0 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium border border-accent/30`}>
                  {service.deliveryTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
