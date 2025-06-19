
import { Card, CardContent } from "@/components/ui/card";

const PromoCards = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Welcome Bonus Card */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full">WELCOME</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                SIGN UP WITH<br />
                MIGIZ AND GET<br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">WELCOME BONUS</span>
              </h2>
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl flex items-center justify-center relative shadow-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-xl"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center bg-gray-100 text-gray-600 px-8 py-3 rounded-full">
                <span className="text-sm font-medium uppercase tracking-wide">COMING SOON</span>
              </div>
            </CardContent>
          </Card>

          {/* Cashback Card */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-4 py-2 rounded-full">CASH BACK</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                GET CASHBACKS<br />
                EVERYTIME YOU<br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SHOP</span>
              </h2>
              <div className="flex items-center justify-center mb-10">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-lg">CASH</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">$</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full shadow-md"></div>
                </div>
              </div>
              <div className="inline-flex items-center bg-gray-100 text-gray-600 px-8 py-3 rounded-full">
                <span className="text-sm font-medium uppercase tracking-wide">COMING SOON</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              PENTAGON ECOM PTE LTD
            </h3>
            <p className="text-gray-600 leading-relaxed">
              10, Anson road, #33-10, International plaza, Singapore - 079903
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
