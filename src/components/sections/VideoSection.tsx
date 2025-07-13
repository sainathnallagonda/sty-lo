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
            {/* Embedded YouTube video */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                className="w-full h-full"
                src="https://www.youtube.com/embed/1imiwOXW6As"
                title="Stylo Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
