
import { Globe, MessageCircle, Users } from "lucide-react";

export const MultiLanguageSection = () => {
  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸", native: "English" },
    { code: "HI", name: "Hindi", flag: "🇮🇳", native: "हिन्दी" },
    { code: "ES", name: "Spanish", flag: "🇪🇸", native: "Español" },
    { code: "FR", name: "French", flag: "🇫🇷", native: "Français" },
    { code: "DE", name: "German", flag: "🇩🇪", native: "Deutsch" },
    { code: "ZH", name: "Chinese", flag: "🇨🇳", native: "中文" },
    { code: "AR", name: "Arabic", flag: "🇸🇦", native: "العربية" },
    { code: "JA", name: "Japanese", flag: "🇯🇵", native: "日本語" }
  ];

  const features = [
    {
      icon: Globe,
      title: "Platform in Your Language",
      description: "Complete interface translation for seamless experience"
    },
    {
      icon: MessageCircle,
      title: "Local Customer Support",
      description: "Native speakers available 24/7 in your time zone"
    },
    {
      icon: Users,
      title: "Cultural Understanding",
      description: "Service providers trained in local customs and preferences"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Speak Your Language
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Care transcends language barriers. Our platform adapts to your language and cultural preferences.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <div 
              key={lang.code}
              className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl text-center animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{lang.flag}</div>
              <div className="font-bold text-gray-800 text-sm">{lang.native}</div>
              <div className="text-gray-600 text-xs">{lang.name}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <p className="text-gray-600 italic">
            More languages added regularly based on community requests
          </p>
        </div>
      </div>
    </section>
  );
};
