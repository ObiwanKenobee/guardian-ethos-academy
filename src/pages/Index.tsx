import Hero from "@/components/Hero";
import CoreFocus from "@/components/CoreFocus";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreFocus />
      <Programs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;