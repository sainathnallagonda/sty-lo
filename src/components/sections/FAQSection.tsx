
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does international payment work?",
      answer: "You pay in your local currency, and we handle the conversion and local payment processing. Our secure system ensures transparent exchange rates with no hidden fees."
    },
    {
      question: "How do you ensure service quality across different countries?",
      answer: "We partner with verified local service providers in each country. All partners go through our quality certification process and are regularly monitored for service standards."
    },
    {
      question: "What if something goes wrong with my order?",
      answer: "We provide 24/7 customer support and real-time order tracking. If there's any issue, our local support team will resolve it quickly, and we offer full refunds for undelivered services."
    },
    {
      question: "Which countries do you currently serve?",
      answer: "We currently operate in 25+ countries across North America, Europe, Asia, and Australia. We're constantly expanding our network to serve more locations."
    },
    {
      question: "How quickly can services be delivered?",
      answer: "Delivery times vary by service type and location. Emergency services like medicine can be delivered within hours, while scheduled services like home cleaning can be booked at your convenience."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use 256-bit SSL encryption and comply with international payment security standards. Your financial information is never stored on our servers and is processed through secure payment gateways."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Stylo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
