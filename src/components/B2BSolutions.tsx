
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe, TrendingUp, Shield, Zap } from "lucide-react";

const B2BSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Scalable ecommerce platforms designed for large businesses with custom integrations and advanced features.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: "Multi-Vendor Marketplace",
      description: "Complete marketplace solutions enabling multiple vendors to sell through your platform with centralized management.",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Globe,
      title: "Global Commerce",
      description: "International B2B trading platforms with multi-currency support, compliance tools, and global payment processing.",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Advanced business intelligence tools providing deep insights into sales performance, customer behavior, and market trends.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security features with compliance management for industry standards and regulations.",
      gradient: "from-gray-500 to-slate-600",
      bgGradient: "from-gray-50 to-slate-50"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Robust API ecosystem for seamless integration with existing business systems, ERP, and third-party services.",
      gradient: "from-yellow-500 to-amber-600",
      bgGradient: "from-yellow-50 to-amber-50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">B2B Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Ready 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> B2B Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business-to-business ecommerce solutions designed to scale with your enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 group bg-white hover:scale-105 rounded-2xl relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white hover:bg-gray-50 px-8 py-4 rounded-full transition-colors duration-300 border border-gray-200 shadow-md">
            <span className="text-gray-700 font-medium">Ready to transform your B2B operations?</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSolutions;
