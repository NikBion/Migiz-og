
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gray-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Logo with the new design */}
          <div className="flex items-center justify-center">
            <div className="group">
              <img 
                src="/lovable-uploads/aefbe672-c7ea-4a3d-b8a1-b809ea954c7f.png" 
                alt="Migiz Logo" 
                className="w-64 h-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main heading with enhanced typography */}
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
              <Star className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">The Future of Shopping</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
              Smart Shopping
              <br />
              <span className="font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rewards
              </span>
            </h1>

            {/* Subtitle with better styling */}
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Shop from <span className="font-semibold text-gray-800">premium brands</span> and earn 
              <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> instant cashback</span>.
              <br />
              Get exclusive vouchers and rewards on every purchase.
            </p>
          </div>

          {/* Enhanced Status indicator */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105">
              <div className="relative">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-lg font-semibold tracking-wide">Coming Soon</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Additional trust indicators */}
          <div className="pt-12">
            <div className="flex items-center justify-center space-x-12 opacity-70">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Premium Brands</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">40%</div>
                <div className="text-sm text-gray-600 font-medium">Max Cashback</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
