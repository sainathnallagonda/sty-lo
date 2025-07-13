
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const StickyBottomBar = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-primary/20 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rocket className="w-5 h-5 text-primary" />
          <div>
            <p className="text-lg font-medium text-foreground">
              Launching December 2025
            </p>
            <p className="text-muted-foreground text-sm">
              Join early access for exclusive benefits
            </p>
          </div>
        </div>
        <Button 
          onClick={scrollToSignup}
          className="cta-gradient text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};
