
export const ServiceCategoriesSection = () => {
  const services = [
    { 
      name: "Food & Groceries", 
      icon: "🍲", 
      color: "orange",
      description: "Fresh groceries, restaurant meals, special dietary items",
      deliveryTime: "Same day"
    },
    { 
      name: "Gifts & Flowers", 
      icon: "🎁", 
      color: "pink",
      description: "Birthday gifts, flowers, personalized items",
      deliveryTime: "1-2 days"
    },
    { 
      name: "Home Services", 
      icon: "🛠️", 
      color: "blue",
      description: "Cleaning, repairs, maintenance, handyman services",
      deliveryTime: "Scheduled"
    },
    { 
      name: "Healthcare", 
      icon: "🏥", 
      color: "green",
      description: "Medicine delivery, doctor consultations, health checkups",
      deliveryTime: "Priority"
    },
    { 
      name: "Transportation", 
      icon: "✈️", 
      color: "purple",
      description: "Airport pickup, local transport, travel booking",
      deliveryTime: "On-demand"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-on-scroll opacity-0">
            Service Categories
          </h2>
          <p className="text-xl text-gray-600 animate-on-scroll opacity-0">
            Everything your loved ones need, delivered locally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 animate-on-scroll opacity-0 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${service.color}-100 to-${service.color}-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full bg-${service.color}-100 text-${service.color}-700 text-sm font-medium`}>
                  {service.deliveryTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular services by country */}
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Popular in Different Countries</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-2xl mb-2 block">🇺🇸</span>
              <h4 className="font-semibold mb-2">United States</h4>
              <p className="text-sm text-gray-600">Grocery delivery, Home cleaning, Medical supplies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-2xl mb-2 block">🇮🇳</span>
              <h4 className="font-semibold mb-2">India</h4>
              <p className="text-sm text-gray-600">Food delivery, Elder care, Medicine delivery</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-2xl mb-2 block">🇬🇧</span>
              <h4 className="font-semibold mb-2">United Kingdom</h4>
              <p className="text-sm text-gray-600">Gift delivery, Transportation, Home services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
