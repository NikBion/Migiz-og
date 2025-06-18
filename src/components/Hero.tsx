
import { Button } from "@/components/ui/button";
import { ShoppingCart, Bitcoin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Bitcoin className="w-16 h-16 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <ShoppingCart className="w-12 h-12 text-pink-300" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '4s'}}>
          <Bitcoin className="w-10 h-10 text-green-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '1s'}}>
          <ShoppingCart className="w-14 h-14 text-blue-300" />
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            WE'RE
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              COMING SOON
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Shop from your favourite brands with cryptocurrency. Get exciting cashbacks and rewards to shop more!
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            COMING SOON
          </Button>

          {/* 3D Shopping illustration placeholder */}
          <div className="mt-16 relative">
            <div className="inline-block animate-float">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <ShoppingCart className="w-16 h-16 text-white" />
              </div>
            </div>
            
            {/* Floating crypto symbols */}
            <div className="absolute -top-8 -left-8 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Bitcoin className="w-8 h-8 text-yellow-300" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-8 animate-float" style={{animationDelay: '3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
