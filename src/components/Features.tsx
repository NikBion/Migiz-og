
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Shield, Zap, Gift } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Crypto Payments",
      description: "Pay with Bitcoin, Ethereum, and other major cryptocurrencies"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security with blockchain verification"
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Earn up to 40% cashback on every purchase"
    },
    {
      icon: Gift,
      title: "Premium Brands",
      description: "Access to 100+ top-tier brands and exclusive deals"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Why Choose Migiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of online shopping with cryptocurrency integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-0 shadow-none hover:shadow-lg transition-all duration-300 p-6 group"
            >
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
