
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MapPin } from "lucide-react";

export const InteractiveDemoSection = () => {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const countries = [
    { code: "IN", name: "India", currency: "₹", flag: "🇮🇳" },
    { code: "US", name: "United States", currency: "$", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", currency: "£", flag: "🇬🇧" },
    { code: "CA", name: "Canada", currency: "C$", flag: "🇨🇦" },
    { code: "AU", name: "Australia", currency: "A$", flag: "🇦🇺" }
  ];

  const services = [
    { id: "grocery", name: "Grocery Delivery", price: { IN: 2000, US: 25, UK: 20, CA: 30, AU: 35 } },
    { id: "flowers", name: "Flower Bouquet", price: { IN: 1500, US: 18, UK: 15, CA: 22, AU: 25 } },
    { id: "medicine", name: "Medicine Delivery", price: { IN: 800, US: 12, UK: 10, CA: 15, AU: 18 } }
  ];

  const getFromCountryData = () => countries.find(c => c.code === fromCountry);
  const getToCountryData = () => countries.find(c => c.code === toCountry);
  const getSelectedServiceData = () => services.find(s => s.id === selectedService);

  const calculatePrice = () => {
    const serviceData = getSelectedServiceData();
    const fromData = getFromCountryData();
    const toData = getToCountryData();
    
    if (!serviceData || !fromData || !toData) return null;
    
    return {
      fromPrice: `${fromData.currency}${serviceData.price[fromCountry as keyof typeof serviceData.price]}`,
      toPrice: `${toData.currency}${serviceData.price[toCountry as keyof typeof serviceData.price]}`
    };
  };

  const pricing = calculatePrice();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Try Our Service Calculator
          </h2>
          <p className="text-xl text-gray-600">
            See how easy it is to send care across borders
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* From Country */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">You are in:</label>
                <Select onValueChange={setFromCountry}>
                  <SelectTrigger className="rounded-xl border-2 border-gray-200 text-lg p-4 h-auto bg-white">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          {country.flag} {country.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Arrow */}
              <div className="flex items-end justify-center pb-6">
                <ArrowRight className="text-blue-600 w-8 h-8" />
              </div>

              {/* To Country */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Send care to:</label>
                <Select onValueChange={setToCountry}>
                  <SelectTrigger className="rounded-xl border-2 border-gray-200 text-lg p-4 h-auto bg-white">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          {country.flag} {country.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Service Selection */}
            {fromCountry && toCountry && (
              <div className="mb-8 animate-fade-in">
                <label className="block text-lg font-medium text-gray-700 mb-3">Choose a service:</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="font-medium text-gray-800">{service.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price Display */}
            {pricing && (
              <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{pricing.fromPrice}</div>
                    <div className="text-gray-600">You pay</div>
                  </div>
                  <ArrowRight className="text-blue-600 w-6 h-6" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{pricing.toPrice}</div>
                    <div className="text-gray-600">Service value</div>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4 italic">
                  Seamless currency conversion, local service delivery
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
