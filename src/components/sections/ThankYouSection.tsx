
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ThankYouSection = () => {
  const [referralLink, setReferralLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate a simple referral link
    const randomId = Math.random().toString(36).substr(2, 9);
    setReferralLink(`https://stylo.care/join/${randomId}`);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareButtons = [
    { name: "Twitter", color: "bg-blue-500", onClick: () => window.open(`https://twitter.com/intent/tweet?text=Join me on Stylo - Send care beyond borders! ${referralLink}`) },
    { name: "WhatsApp", color: "bg-green-500", onClick: () => window.open(`https://wa.me/?text=Join me on Stylo - Send care beyond borders! ${referralLink}`) },
    { name: "Email", color: "bg-gray-600", onClick: () => window.open(`mailto:?subject=Join Stylo&body=Join me on Stylo - Send care beyond borders! ${referralLink}`) }
  ];

  return (
    <section id="thank-you-section" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll opacity-0">
          <div className="text-6xl mb-6">🎉</div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Thank you for joining Stylo!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Share care further — here's your referral link.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Input 
                value={referralLink} 
                readOnly 
                className="text-center text-lg rounded-xl"
              />
              <Button 
                onClick={copyToClipboard}
                className="px-6 py-2 rounded-xl"
                variant={copied ? "secondary" : "default"}
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="flex justify-center space-x-4">
              {shareButtons.map((button, index) => (
                <Button
                  key={index}
                  onClick={button.onClick}
                  className={`${button.color} hover:opacity-90 text-white px-6 py-2 rounded-xl transform hover:scale-105 transition-all duration-300`}
                >
                  {button.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
