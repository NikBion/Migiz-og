
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
        <div className="space-y-12">
          {/* Logo image with proper sizing */}
          <div className="flex items-center justify-center py-4">
            <img 
              src="/lovable-uploads/ec796f2e-d5ed-4aea-ae72-4fd61118c53b.png" 
              alt="Migiz Logo" 
              className="h-24 md:h-32 lg:h-40 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Main heading with enhanced typography */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full shadow-lg border border-gray-200/50">
              <Star className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">SGD & USD Earn and Buy</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 leading-tight">
              One Stop Shop For
              <br />
              <span className="font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecom Solution
              </span>
            </h2>

            {/* Subtitle with better styling */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Comprehensive <span className="font-bold text-gray-800">B2B ecommerce solutions</span> for your business growth.
              <br />
              <span className="font-semibold">Complete platform with cashback, rewards, and white-label solutions.</span>
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-12 text-gray-600 pb-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-7 h-7 text-blue-500" />
              <span className="font-semibold text-lg">1000+ Premium Brands</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <Award className="w-7 h-7 text-green-500" />
              <span className="font-semibold text-lg">Complete Solutions</span>
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
