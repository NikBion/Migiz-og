
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Bitcoin, DollarSign, CreditCard } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-purple-gradient">
      <Hero />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
