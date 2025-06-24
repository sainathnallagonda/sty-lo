
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const launchDate = new Date('2025-12-01');
  const now = new Date();
  const timeUntilLaunch = launchDate.getTime() - now.getTime();
  const daysUntilLaunch = Math.ceil(timeUntilLaunch / (1000 * 3600 * 24));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
      {/* Enhanced globe background with animated connection lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-2 border-blue-300 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-green-300 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border border-orange-300 animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
          <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="#93C5FD" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="75%" x2="75%" y2="33%" stroke="#86EFAC" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="#FED7AA" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-on-scroll opacity-0 transition-all duration-1000">
          {/* Launch Date Banner */}
          <div className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Launching December 2025</span>
            <Clock className="w-5 h-5" />
            <span className="text-blue-200">{daysUntilLaunch} days to go!</span>
          </div>
          
          <p className="text-blue-600 text-lg mb-4 font-medium italic">
            From my heart to your home — no borders, no limits.
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Send Care
            <span className="text-blue-600 block">Beyond Borders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Order goods and services for loved ones abroad. Local service, local currency, seamless love.
          </p>
          
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-orange-800 font-semibold">
              🚧 Currently in Development - Join the waitlist for early access!
            </p>
          </div>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Join Waitlist - Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};
