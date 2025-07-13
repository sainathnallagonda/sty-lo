
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const StickyBottomBar = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-trust-gradient backdrop-blur-sm border-t border-cyan-300/30 p-4 z-50 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rocket className="w-5 h-5 text-yellow-300 energy-pulse" />
          <div>
            <p className="text-lg font-medium text-white">
              Launching December 2025
            </p>
            <p className="text-cyan-100 text-sm">
              Join early access for exclusive benefits
            </p>
          </div>
        </div>
        <Button 
          onClick={scrollToSignup}
          className="bg-action-gradient hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold energy-pulse"
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};
