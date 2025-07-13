
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements using design system colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-secondary to-primary blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-secondary to-primary blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-on-scroll opacity-0 transition-all duration-1000">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mb-4">
              Stylo
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground text-lg font-medium">Coming Soon</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
          </div>
          
          {/* Launch Date Banner */}
          <div className="bg-glass border border-border px-6 py-3 rounded-full inline-flex items-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-semibold text-foreground">Launching December 2025</span>
            <span className="text-muted-foreground">• {daysUntilLaunch} days to go</span>
          </div>
          
          <p className="text-muted-foreground text-lg mb-6 font-medium italic">
            From my heart to your home — no borders, no limits.
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Send Care
            <span className="text-accent block">Beyond Borders</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Order goods and services for loved ones abroad. Local service, local currency, seamless love.
          </p>
          
          <Button 
            onClick={scrollToSignup}
            className="bg-cta-gradient hover:scale-105 text-cta-foreground px-8 py-4 text-lg rounded-full shadow-elevated transform transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
