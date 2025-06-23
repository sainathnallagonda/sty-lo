
export const FooterSection = () => {
  const socialIcons = [
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "GitHub", icon: "💻", link: "#" },
    { name: "Email", icon: "📧", link: "mailto:hello@stylo.care" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 pb-20">
      <div className="container mx-auto px-6">
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
