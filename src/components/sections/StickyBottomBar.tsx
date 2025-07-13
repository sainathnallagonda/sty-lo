
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const StickyBottomBar = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-pink-900 backdrop-blur-sm border-t border-pink-400/30 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rocket className="w-5 h-5 text-pink-400" />
          <div>
            <p className="text-lg font-medium text-white">
              Launching December 2025
            </p>
            <p className="text-purple-200 text-sm">
              Get 1000 FREE credits with early access
            </p>
          </div>
        </div>
        <Button 
          onClick={scrollToSignup}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
        >
          Get 1000 Credits
        </Button>
      </div>
    </div>
  );
};
