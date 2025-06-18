
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Bitcoin, DollarSign, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "TOP BRANDS",
      description: "100+ Brands",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: DollarSign,
      title: "BIG CASHBACK",
      description: "Upto 40% Cashback",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: CreditCard,
      title: "REFER & EARN",
      description: "Refer your friend.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Bitcoin,
      title: "WELCOME BONUS",
      description: "Instant Sign-up Bonus",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
