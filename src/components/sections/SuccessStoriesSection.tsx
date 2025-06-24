
import { Quote, Heart, MapPin } from "lucide-react";

export const SuccessStoriesSection = () => {
  const stories = [
    {
      quote: "When my grandmother fell ill in Mumbai, I was able to arrange a doctor visit and medicine delivery from London within 2 hours. Stylo made me feel like I was right there with her.",
      author: "Priya Sharma",
      relationship: "Granddaughter",
      route: "🇬🇧 London → 🇮🇳 Mumbai",
      service: "Emergency Healthcare",
      impact: "Same-day medical care"
    },
    {
      quote: "Every week, I send fresh groceries to my parents in Toronto. They love the surprise of discovering new items I've chosen for them. It's become our little tradition.",
      author: "Michael Chen",
      relationship: "Son",
      route: "🇺🇸 San Francisco → 🇨🇦 Toronto",
      service: "Weekly Grocery Delivery",
      impact: "52 weeks of care"
    },
    {
      quote: "After my father's surgery in Delhi, I arranged daily home-cooked meals and a cleaning service from my office in Dubai. Technology truly bridges distances.",
      author: "Fatima Al-Zahra",
      relationship: "Daughter",
      route: "🇦🇪 Dubai → 🇮🇳 Delhi",
      service: "Recovery Support Package",
      impact: "3 weeks of daily care"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Real Stories, Real Impact
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, families use Stylo to bridge distances and show love across borders
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-blue-600 w-8 h-8 mb-4" />
              
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {story.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{story.author}</p>
                    <p className="text-gray-600 text-sm">{story.relationship}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{story.route}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium text-blue-600">{story.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impact:</span>
                    <span className="font-medium text-green-600">{story.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <p className="text-gray-600 italic">
            Join thousands of families already using Stylo to stay connected
          </p>
        </div>
      </div>
    </section>
  );
};
