
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-energy-gradient">
      {/* Energetic animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-action-gradient blur-3xl energy-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-trust-gradient blur-2xl energy-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 blur-xl energy-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl energy-rotate" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-on-scroll opacity-0 transition-all duration-1000">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4 energy-pulse">
              Stylo
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300 energy-pulse" />
              <span className="text-white text-lg font-medium">Coming Soon</span>
              <Sparkles className="w-5 h-5 text-yellow-300 energy-pulse" />
            </div>
          </div>
          
          {/* Launch Date Banner */}
          <div className="bg-glass border border-white/30 px-6 py-3 rounded-full inline-flex items-center gap-2 mb-8 hover:bg-white/20 transition-all duration-300">
            <Calendar className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold text-white">Launching December 2025</span>
            <span className="text-cyan-200">• {daysUntilLaunch} days to go</span>
          </div>
          
          <p className="text-cyan-100 text-lg mb-6 font-medium italic">
            From my heart to your home — no borders, no limits.
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Send Care
            <span className="text-yellow-300 block energy-pulse">Beyond Borders</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Order goods and services for loved ones abroad. Local service, local currency, seamless love.
          </p>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-action-gradient hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 energy-pulse"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
