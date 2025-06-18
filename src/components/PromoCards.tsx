
import { Card, CardContent } from "@/components/ui/card";

const PromoCards = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Welcome Bonus Card */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="mb-6">
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">WELCOME</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                SIGN UP WITH<br />
                MIGIZ AND GET<br />
                WELCOME BONUS
              </h2>
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-xl"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-md"></div>
                </div>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">COMING SOON</span>
              </div>
            </CardContent>
          </Card>

          {/* Cashback Card */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="mb-6">
                <span className="text-sm font-medium text-green-600 uppercase tracking-wider">CASH BACK</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                GET CASHBACKS<br />
                EVERYTIME YOU<br />
                SHOP
              </h2>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CASH</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">$</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">COMING SOON</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="mt-24 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              PENTAGON ECOM PTE LTD
            </h3>
            <p className="text-gray-600">
              10, Anson road, #33-10, International plaza, Singapore - 079903
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
