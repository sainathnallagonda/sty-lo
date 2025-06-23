
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
      {/* Soft globe background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-2 border-blue-300 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-green-300 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border border-orange-300 animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
          <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="#93C5FD" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="75%" x2="75%" y2="33%" stroke="#86EFAC" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-on-scroll opacity-0 transition-all duration-1000">
          <p className="text-blue-600 text-lg mb-4 font-medium italic">
            From my heart to your home — no borders, no limits.
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Send Care
            <span className="text-blue-600 block">Beyond Borders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Order goods and services for loved ones abroad. Local service, local currency, seamless love.
          </p>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Sending Care
          </Button>
        </div>
      </div>
    </section>
  );
};
