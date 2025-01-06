import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import EduExp from "@/components/EduExp";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <EduExp />
      <FAQ />
      <Footer />
    </div>
  );
};
