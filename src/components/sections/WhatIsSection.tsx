
import { Globe, ArrowRight, IndianRupee, DollarSign } from "lucide-react";

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
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
              Stylo lets you send help, gifts, food, and more to loved ones in another country — while you pay in your local currency.
            </p>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Their local service, your peace of mind.
            </p>
          </div>

          {/* Real-world scenario */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">How It Works in Real Life</h3>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇺🇸</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">You in USA</h4>
                <p className="text-gray-600">Want to send groceries to your parents in India</p>
                <div className="flex items-center justify-center mt-3">
                  <DollarSign className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="font-semibold text-blue-600">$25</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="text-blue-600 w-8 h-8 animate-pulse" />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Parents in India</h4>
                <p className="text-gray-600">Receive fresh groceries delivered locally</p>
                <div className="flex items-center justify-center mt-3">
                  <IndianRupee className="w-5 h-5 text-green-600 mr-1" />
                  <span className="font-semibold text-green-600">₹2,000</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              One platform, local services worldwide, seamless currency conversion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
