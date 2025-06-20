
import { Card, CardContent } from "@/components/ui/card";
import { Gift, DollarSign, Sparkles, Star } from "lucide-react";

const PromoCards = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-100 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Exclusive Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Journey With 
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"> Migiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive benefits and rewards from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Welcome Bonus Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl group hover:scale-105 hover:-translate-y-2">
            <CardContent className="p-12 text-center relative">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="inline-flex items-center space-x-2 text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-100 px-4 py-2 rounded-full">
                    <Gift className="w-4 h-4" />
                    <span>Welcome</span>
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                  SIGN UP WITH<br />
                  MIGIZ AND GET<br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    WELCOME BONUS
                  </span>
                </h3>
                
                {/* Enhanced graphic */}
                <div className="flex items-center justify-center mb-10">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center">
                        <Gift className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                      <Star className="w-4 h-4 text-yellow-800" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full shadow-md animate-pulse"></div>
                    <div className="absolute top-8 -left-8 w-4 h-4 bg-purple-400 rounded-full shadow-sm"></div>
                  </div>
                </div>
                
                <div className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-full transition-colors duration-300 font-medium">
                  <span className="text-sm uppercase tracking-wide">Coming Soon</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cashback Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl group hover:scale-105 hover:-translate-y-2">
            <CardContent className="p-12 text-center relative">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-teal-500/5 group-hover:from-green-500/10 group-hover:via-blue-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="inline-flex items-center space-x-2 text-xs font-bold text-green-600 uppercase tracking-widest bg-green-100 px-4 py-2 rounded-full">
                    <DollarSign className="w-4 h-4" />
                    <span>Cash Back</span>
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                  GET CASHBACKS<br />
                  EVERYTIME YOU<br />
                  <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                    SHOP
                  </span>
                </h3>
                
                {/* Enhanced graphic */}
                <div className="flex items-center justify-center mb-10">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">CASH</span>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <DollarSign className="w-6 h-6 text-white font-bold" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-green-500 rounded-full shadow-lg animate-pulse"></div>
                    <div className="absolute top-4 -left-6 w-5 h-5 bg-blue-400 rounded-full shadow-md"></div>
                    <div className="absolute -top-4 left-8 w-3 h-3 bg-teal-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-full transition-colors duration-300 font-medium">
                  <span className="text-sm uppercase tracking-wide">Coming Soon</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Company Info */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                PENTAGON ECOM PTE LTD
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                10, Anson road, #33-10, International plaza, Singapore - 079903
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
