
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, TicketPercent, Ticket, ShoppingBag } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Smart Shopping",
      description: "Browse and shop from 1000+ premium brands worldwide"
    },
    {
      icon: TicketPercent,
      title: "Instant Cashback",
      description: "Earn up to 40% cashback on every purchase automatically"
    },
    {
      icon: Ticket,
      title: "Exclusive Vouchers",
      description: "Access special discount vouchers and member-only deals"
    },
    {
      icon: ShoppingBag,
      title: "Reward Points",
      description: "Collect points with every purchase and redeem for rewards"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why Choose Migiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Experience the future of smart shopping with instant rewards and cashback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-0 shadow-none hover:shadow-lg transition-all duration-500 p-8 group bg-gray-50/50 hover:bg-white rounded-2xl"
            >
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 transition-all duration-500 shadow-md group-hover:shadow-lg">
                  <feature.icon className="w-9 h-9 text-gray-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
