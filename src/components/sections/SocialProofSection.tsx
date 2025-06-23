
export const SocialProofSection = () => {
  const flags = [
    { flag: '🇺🇸', country: 'US' },
    { flag: '🇬🇧', country: 'UK' },
    { flag: '🇮🇳', country: 'IN' },
    { flag: '🇨🇦', country: 'CA' },
    { flag: '🇦🇺', country: 'AU' },
    { flag: '🇩🇪', country: 'DE' },
    { flag: '🇫🇷', country: 'FR' },
    { flag: '🇯🇵', country: 'JP' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll opacity-0 transition-all duration-800">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Trusted by families in 20+ countries
          </h3>
          
          <div className="flex justify-center mb-8 space-x-4">
            {flags.map((item, index) => (
              <div 
                key={index}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl animate-bounce-gentle transform hover:scale-110 transition-all duration-300" 
                style={{ animationDelay: `${index * 0.1}s` }}
                title={item.country}
              >
                {item.flag}
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 animate-on-scroll opacity-0">
            <p className="text-lg text-gray-700 italic mb-4">
              "Thanks to Stylo, my parents in the US feel me closer every day."
            </p>
            <p className="text-blue-600 font-medium">— Priya, London</p>
          </div>
        </div>
      </div>
    </section>
  );
};
