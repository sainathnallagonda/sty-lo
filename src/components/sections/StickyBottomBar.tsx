
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const StickyBottomBar = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-glass border-t border-border p-4 z-50 shadow-elevated backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rocket className="w-5 h-5 text-accent" />
          <div>
            <p className="text-lg font-medium text-foreground">
              Launching December 2025
            </p>
            <p className="text-muted-foreground text-sm">
              Get 1000 FREE credits with early access
            </p>
          </div>
        </div>
        <Button 
          onClick={scrollToSignup}
          className="bg-cta-gradient hover:scale-105 text-cta-foreground px-6 py-2 rounded-full shadow-elevated transform transition-all duration-300 font-semibold"
        >
          Get 1000 Credits
        </Button>
      </div>
    </div>
  );
};
