
export const ServiceCategoriesSection = () => {
  const services = [
    { name: "Food", icon: "🍲", color: "orange" },
    { name: "Gifts", icon: "🎁", color: "pink" },
    { name: "Help", icon: "🛠️", color: "blue" },
    { name: "Health", icon: "🏥", color: "green" },
    { name: "Travel", icon: "✈️", color: "purple" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-on-scroll opacity-0">
            Service Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
