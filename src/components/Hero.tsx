
import { ArrowRight, Star, Shield, Award, Users } from "lucide-react";

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
        <div className="space-y-12">
          {/* Logo text with gradient */}
          <div className="flex items-center justify-center">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              Migiz
            </h1>
          </div>

          {/* Main heading with enhanced typography */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
              <Star className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">The Future of Shopping</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Smart Shopping
              <br />
              <span className="font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Rewards
              </span>
            </h2>

            {/* Subtitle with better styling */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Shop from <span className="font-semibold text-gray-800">premium brands</span> and earn 
              <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> instant cashback</span>.
              <br />
              Buy Vouchers/giftcards & get reward on every purchase.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 text-gray-600 mt-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-medium">1000+ Premium Brands</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-500" />
              <span className="font-medium">40% Max Cashback</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
