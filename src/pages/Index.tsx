
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PromoCards from "@/components/PromoCards";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PromoCards />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
