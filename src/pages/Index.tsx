import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BulkCalculator from "@/components/BulkCalculator";
import WhyChoose from "@/components/WhyChoose";
import TrustSection from "@/components/TrustSection";
import LogisticsSection from "@/components/LogisticsSection";
import BulkOrderForm from "@/components/BulkOrderForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <FeaturedProducts />
    <BulkCalculator />
    <WhyChoose />
    <TrustSection />
    <LogisticsSection />
    <BulkOrderForm />
    <Footer />
  </>
);

export default Index;
