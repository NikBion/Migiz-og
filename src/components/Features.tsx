
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Smartphone, Palette, Gift, Award, Users } from "lucide-react";

const Features = () => {
  const solutions = [
    {
      icon: DollarSign,
      title: "Cashback Solution",
      description: "Reward your customers with attractive cashback offers to boost sales and loyalty.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Smartphone,
      title: "App Development Solution",
      description: "Custom mobile and web applications tailored to your business requirements.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Palette,
      title: "Whitelabeling Solution",
      description: "Brand our platform as your own with complete customization and control.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Gift,
      title: "Voucher/Giftcard Sale",
      description: "Sell and distribute vouchers effortlessly with our smart solution.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      title: "Reward Point Mechanism",
      description: "Implement comprehensive loyalty programs with flexible reward point systems.",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "Affiliate Program",
      description: "Launch and manage affiliate marketing programs to expand your reach.",
      gradient: "from-indigo-500 to-blue-600",
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Migiz 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive B2B ecommerce solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 group bg-white hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
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
