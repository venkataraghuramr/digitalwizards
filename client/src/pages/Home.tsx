import { useEffect } from "react";
import HeroSection from "@/sections/HeroSection";
import ClientsSection from "@/sections/ClientsSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WorkSection from "@/sections/WorkSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import ContactSection from "@/sections/ContactSection";
import BlogSection from "@/sections/BlogSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Home = () => {
  // Apply scroll animations
  useScrollAnimation();

  // Scroll to the specific section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add small delay to ensure smooth scrolling
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Initial check for hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <BlogSection />
    </>
  );
};

export default Home;
