
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      title: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      description: "Designer clothing and accessories",
      cashback: "Up to 25%"
    },
    {
      title: "Electronics",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop&crop=center",
      description: "Latest gadgets and technology",
      cashback: "Up to 15%"
    },
    {
      title: "Beauty",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&crop=center",
      description: "Premium beauty and skincare",
      cashback: "Up to 30%"
    },
    {
      title: "Home & Living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      description: "Furniture and home decor",
      cashback: "Up to 20%"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Shop Categories
          </h2>
          <p className="text-gray-600">
            Discover amazing deals and cashback across all categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group overflow-hidden border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.cashback}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Refer Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Refer & Earn
              </h3>
              <p className="text-gray-600 max-w-md">
                Invite friends to Migiz and earn bonus cashback on every purchase they make.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-green-600">$</span>
                </div>
                <span className="text-sm text-gray-600">Bonus Rewards</span>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">40%</div>
                <span className="text-sm text-gray-600">Max Cashback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
