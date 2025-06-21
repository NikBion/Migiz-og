
import { ShoppingBag, Heart, DollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8 group">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-4xl font-bold text-white tracking-tight">MIGIZ</div>
            </div>
          </div>
          
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            The smart way to shop online. 
            <br />
            <span className="text-white font-medium">Buy Vouchers/giftcards & get reward on every purchase.</span>
          </p>

          {/* Social proof or additional info */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm">Brands</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-sm">Cashback</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center space-x-1 mb-1">
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-lg font-bold text-white">SGD</span>
                  <span className="text-white">&</span>
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-lg font-bold text-white">USD</span>
                </div>
                <div className="text-sm">Earn and Buy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-gray-400">for smart shoppers</span>
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
