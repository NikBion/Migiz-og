
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, TicketPercent, Ticket, ShoppingBag, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Smart Shopping",
      description: "Browse and shop from 1000+ premium brands worldwide",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: TicketPercent,
      title: "Instant Cashback",
      description: "Earn up to 40% cashback on every purchase automatically",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: Ticket,
      title: "Exclusive Vouchers",
      description: "Access special discount vouchers and member-only deals",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: ShoppingBag,
      title: "Reward Points",
      description: "Collect points with every purchase and redeem for rewards",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Why Choose 
            <span className="font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"> Migiz</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the future of smart shopping with instant rewards and cashback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group bg-white hover:scale-105 hover:-translate-y-2 rounded-3xl relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardContent className="p-0 text-center relative z-10">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg animate-bounce"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional call-to-action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gray-50 hover:bg-gray-100 px-8 py-4 rounded-full transition-colors duration-300 border border-gray-200">
            <span className="text-gray-700 font-medium">Ready to get started?</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
