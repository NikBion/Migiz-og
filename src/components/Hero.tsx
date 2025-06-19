
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900 tracking-tight">MIGIZ</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Smart Shopping
              <br />
              <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Rewards
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Shop from premium brands and earn instant cashback. 
              Get exclusive vouchers and rewards on every purchase.
            </p>
          </div>

          {/* Status */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-full shadow-lg">
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium tracking-wide">Coming Soon</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg rounded-full group transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
