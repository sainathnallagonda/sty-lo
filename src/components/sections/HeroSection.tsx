
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const launchDate = new Date('2025-12-01');
  const now = new Date();
  const timeUntilLaunch = launchDate.getTime() - now.getTime();
  const daysUntilLaunch = Math.ceil(timeUntilLaunch / (1000 * 3600 * 24));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-on-scroll opacity-0 transition-all duration-1000">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Stylo
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-purple-200 text-lg font-medium">Coming Soon</span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>
          
          {/* Launch Date Banner */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 px-6 py-3 rounded-full inline-flex items-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-pink-400" />
            <span className="font-semibold text-white">Launching December 2025</span>
            <span className="text-pink-300">• {daysUntilLaunch} days to go</span>
          </div>
          
          <p className="text-pink-300 text-lg mb-6 font-medium italic">
            From my heart to your home — no borders, no limits.
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Send Care
            <span className="text-pink-400 block">Beyond Borders</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Order goods and services for loved ones abroad. Local service, local currency, seamless love.
          </p>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
