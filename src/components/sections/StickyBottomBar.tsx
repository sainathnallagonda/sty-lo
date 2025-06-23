
import { Button } from "@/components/ui/button";

export const StickyBottomBar = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-lg font-medium text-gray-800">
          Ready to send care?
        </p>
        <Button 
          onClick={scrollToSignup}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Join Stylo Now
        </Button>
      </div>
    </div>
  );
};
