
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Stylo in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how Stylo connects families across borders with seamless care delivery
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-glass rounded-2xl overflow-hidden shadow-elevated border border-border">
            <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all duration-300 group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Demo Video Coming Soon</h3>
                <p className="text-white/80">Experience the future of cross-border care</p>
              </div>
            </div>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
