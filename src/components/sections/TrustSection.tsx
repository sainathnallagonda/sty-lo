import { Shield, Users, Clock, CheckCircle, Globe } from "lucide-react";

export const TrustSection = () => {
  const trustMetrics = [
    { icon: Users, number: "50,000+", label: "Families Connected", color: "blue" },
    { icon: Globe, number: "25+", label: "Countries Served", color: "green" },
    { icon: Clock, number: "24/7", label: "Customer Support", color: "orange" },
    { icon: CheckCircle, number: "99.9%", label: "Success Rate", color: "purple" }
  ];

  const securityFeatures = [
    "256-bit SSL Encryption",
    "Secure Payment Processing",
    "Local Partner Network",
    "Real-time Order Tracking"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="text-blue-600 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Trusted & Secure
            </h2>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${metric.color}-100 flex items-center justify-center`}>
                  <IconComponent className={`w-8 h-8 text-${metric.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.number}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Security Features */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Security is Our Priority</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
