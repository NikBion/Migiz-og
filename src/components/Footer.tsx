
import { ShoppingBag, Heart, DollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              MIGIZ
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Your trusted B2B partner for complete ecommerce solutions.
            <br />
            <span className="text-white font-medium">Empowering businesses with innovative technology solutions.</span>
          </p>

          {/* Social proof or additional info */}
          <div className="mb-10">
            <div className="inline-flex items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-xl font-bold text-white">1000+</div>
                <div className="text-sm">Brands</div>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">Complete</div>
                <div className="text-sm">Solutions</div>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center space-x-1 mb-1">
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">SGD</span>
                  <span className="text-white">&</span>
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">USD</span>
                </div>
                <div className="text-sm">Earn and Buy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-gray-400">for business growth</span>
            </div>
            <p className="text-gray-500">
              © 2024 Migiz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
