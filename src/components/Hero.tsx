
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">MIGIZ</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Smart Shopping
            <br />
            <span className="font-medium">Rewards</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Shop from premium brands and earn instant cashback. 
            Get exclusive vouchers and rewards on every purchase.
          </p>

          {/* Status */}
          <div className="inline-flex items-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-full mb-8">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-full group transition-all duration-300"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
