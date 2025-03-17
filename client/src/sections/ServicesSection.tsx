import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/service-card";

const services = [
  {
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    description: "Strategic campaigns across multiple platforms to increase brand awareness and drive conversions.",
    features: [
      "Social Media Marketing",
      "PPC Advertising",
      "Email Marketing"
    ]
  },
  {
    icon: "fas fa-desktop",
    title: "Web Design & Development",
    description: "Custom, responsive websites that engage visitors and drive business results.",
    features: [
      "Custom Website Design",
      "E-commerce Solutions",
      "CMS Implementation"
    ]
  },
  {
    icon: "fas fa-chart-line",
    title: "SEO & Content Strategy",
    description: "Data-driven optimization to improve search rankings and organic traffic.",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "Content Marketing"
    ]
  },
  {
    icon: "fas fa-paint-brush",
    title: "Brand Identity",
    description: "Comprehensive branding solutions to establish a memorable market presence.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity Systems"
    ]
  },
  {
    icon: "fas fa-camera",
    title: "Content Production",
    description: "Engaging multimedia content that tells your brand story and connects with your audience.",
    features: [
      "Video Production",
      "Photography",
      "Copywriting"
    ]
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    description: "User-centric mobile applications designed for engagement and business growth.",
    features: [
      "iOS & Android Development",
      "UI/UX Design",
      "App Store Optimization"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">OUR SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We offer a full spectrum of digital marketing and design services tailored to your specific business needs and goals.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <motion.a 
            href="#contact" 
            className="inline-block bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
