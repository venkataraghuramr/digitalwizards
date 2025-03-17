import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote: "Digital Wizards transformed our online presence completely. Our website traffic has increased by 200% and conversion rates have doubled since we started working with them.",
    name: "Sarah Johnson",
    position: "CEO, Quantum Retail",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "The team at Digital Wizards delivered beyond our expectations. Their strategic approach to our digital marketing campaigns has been a game-changer for our business.",
    name: "Michael Chen",
    position: "Marketing Director, TechFusion",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "We've worked with several agencies in the past, but none have been as thorough and dedicated as Digital Wizards. They truly understand our brand and vision.",
    name: "Emma Rodriguez",
    position: "Founder, Bloom Beauty",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTablet(!isMobile && window.innerWidth < 1024);
      
      const handleResize = () => {
        setIsTablet(!isMobile && window.innerWidth < 1024);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Determine which testimonials to show based on screen size
  const visibleTestimonials = () => {
    if (isMobile) {
      // Mobile: Show only the current testimonial
      return [testimonials[currentIndex]];
    } else if (isTablet) {
      // Tablet: Show 2 testimonials
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
      ];
    } else {
      // Desktop: Show all 3 testimonials
      return testimonials;
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">TESTIMONIALS</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experiences working with Digital Wizards.
          </p>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${currentIndex}-${index}`}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8">
          <motion.button 
            id="prev-testimonial" 
            className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-sm mr-2"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-left"></i>
          </motion.button>
          <motion.button 
            id="next-testimonial" 
            className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-sm"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
