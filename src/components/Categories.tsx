
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      title: "FASHION",
      status: "COMING SOON",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      gradient: "from-pink-500/80 to-purple-500/80"
    },
    {
      title: "BEAUTY",
      status: "COMING SOON", 
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      gradient: "from-rose-500/80 to-pink-500/80"
    },
    {
      title: "TRAVEL",
      status: "COMING SOON",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      gradient: "from-blue-500/80 to-teal-500/80"
    },
    {
      title: "ELECTRONICS",
      status: "COMING SOON",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      gradient: "from-indigo-500/80 to-purple-500/80"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SHOP FROM YOUR FAVOURITE BRANDS AND GET CASHBACK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                <CardHeader className="absolute bottom-0 left-0 right-0 text-white">
                  <CardTitle className="text-xl font-bold mb-2">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-white/90 text-sm border-b border-white/30 pb-2 inline-block">
                    {category.status}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>

        {/* Refer and Earn Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-black/30 to-black/50 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-8 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  REFER AND EARN
                </h3>
                <p className="text-white/80 text-lg max-w-md">
                  Refer your friend migiz and get cashback every time your referral shop.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                  <span className="text-3xl font-bold text-white">$</span>
                </div>
                <Button 
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  COMING SOON
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
