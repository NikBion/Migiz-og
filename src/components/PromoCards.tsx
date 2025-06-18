
import { Card, CardContent } from "@/components/ui/card";

const PromoCards = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Welcome Bonus Card */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <CardContent className="p-10 text-center">
              <div className="mb-4">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-widest">WELCOME</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                SIGN UP WITH<br />
                MIGIZ AND GET<br />
                WELCOME BONUS
              </h2>
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center relative shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-lg"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
              <div className="inline-flex items-center bg-gray-100 text-gray-600 px-6 py-2 rounded-full">
                <span className="text-xs font-medium uppercase tracking-wide">COMING SOON</span>
              </div>
            </CardContent>
          </Card>

          {/* Cashback Card */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <CardContent className="p-10 text-center">
              <div className="mb-4">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-widest">CASH BACK</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                GET CASHBACKS<br />
                EVERYTIME YOU<br />
                SHOP
              </h2>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">CASH</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-black font-bold text-xs">$</span>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-green-500 rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="inline-flex items-center bg-gray-100 text-gray-600 px-6 py-2 rounded-full">
                <span className="text-xs font-medium uppercase tracking-wide">COMING SOON</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              PENTAGON ECOM PTE LTD
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              10, Anson road, #33-10, International plaza, Singapore - 079903
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
