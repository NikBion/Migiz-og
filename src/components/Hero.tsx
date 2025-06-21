
import { ArrowRight, Star, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gray-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center max-w-7xl relative z-10">
        <div className="space-y-16">
          {/* Logo text with gradient - improved margins and padding */}
          <div className="flex items-center justify-center py-4">
            <h1 className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl leading-none">
              Migiz
            </h1>
          </div>

          {/* Main heading with enhanced typography - made bigger and bolder */}
          <div className="space-y-12">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-full shadow-lg border border-gray-200/50">
              <Star className="w-6 h-6 text-orange-500" />
              <span className="text-base font-semibold uppercase tracking-widest">The Future of Shopping</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-tight">
              Smart Shopping
              <br />
              <span className="font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Rewards
              </span>
            </h2>

            {/* Subtitle with better styling - made bigger and bolder */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Shop from <span className="font-bold text-gray-800">premium brands</span> and earn 
              <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> instant cashback</span>.
              <br />
              <span className="font-semibold">Buy Vouchers/giftcards & get reward on every purchase.</span>
            </p>
          </div>

          {/* Trust indicators - updated text and made bigger */}
          <div className="flex items-center justify-center space-x-12 text-gray-600 mt-12">
            <div className="flex items-center space-x-3">
              <Shield className="w-7 h-7 text-blue-500" />
              <span className="font-semibold text-lg">1000+ Premium Brands</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <Award className="w-7 h-7 text-green-500" />
              <span className="font-semibold text-lg">40% Max Cashback</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <Users className="w-7 h-7 text-purple-500" />
              <span className="font-semibold text-lg">SGD & USD Earn and Buy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
