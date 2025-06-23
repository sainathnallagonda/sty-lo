
import { Globe } from "lucide-react";

export const FooterSection = () => {
  const socialIcons = [
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "GitHub", icon: "💻", link: "#" },
    { name: "Email", icon: "📧", link: "mailto:hello@stylo.care" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 pb-20 relative overflow-hidden">
      {/* Soft globe watermark */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Globe className="w-32 h-32 text-blue-400 opacity-10" />
      </div>
      
      {/* Gentle wave shape */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-blue-50"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Stylo</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Manifesto</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="text-2xl hover:scale-110 transition-transform duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Stylo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
