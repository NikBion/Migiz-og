
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import B2BSolutions from "@/components/B2BSolutions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <B2BSolutions />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
