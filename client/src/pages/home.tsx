import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TrustedBySection from "@/components/trusted-by-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import CaseStudiesSection from "@/components/case-studies-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans text-foreground bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <AboutSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
