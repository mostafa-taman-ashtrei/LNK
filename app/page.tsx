import AboutSection from "@/components/About/AboutSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <Pricing />
    </>
  );
};

export default Home;

