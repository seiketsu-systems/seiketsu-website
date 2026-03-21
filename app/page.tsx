import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Partners from "@/components/Partners";
import Vergelijking from "@/components/Vergelijking";
import Diensten from "@/components/Diensten";
import Werkwijze from "@/components/Werkwijze";
import Prijzen from "@/components/Prijzen";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProofBar />
        <Partners />
        <Vergelijking />
        <Diensten />
        <Werkwijze />
        <Prijzen />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
