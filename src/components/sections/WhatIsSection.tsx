
import { Globe } from "lucide-react";

export const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll opacity-0 transition-all duration-800">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What is Stylo?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
              Stylo lets you send help, gifts, food, and more to loved ones in another country — while you pay in your local currency.
            </p>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Their local service, your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
