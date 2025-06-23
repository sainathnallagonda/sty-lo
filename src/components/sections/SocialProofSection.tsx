
export const SocialProofSection = () => {
  const flags = ['🇺🇸', '🇬🇧', '🇮🇳', '🇨🇦', '🇦🇺', '🇩🇪', '🇫🇷', '🇯🇵'];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll opacity-0 transition-all duration-800">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Trusted by families in 20+ countries
          </h3>
          
          <div className="flex justify-center mb-8 space-x-2">
            {flags.map((flag, index) => (
              <span 
                key={index} 
                className="text-3xl animate-bounce" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {flag}
              </span>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
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
