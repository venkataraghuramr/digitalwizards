import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    category: "Web Design",
    title: "Luxury E-commerce Redesign",
    description: "A complete overhaul of an e-commerce platform resulting in a 43% increase in conversion rate."
  },
  {
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    category: "Mobile App",
    title: "Health & Fitness App",
    description: "A feature-rich mobile application with personalized workout plans and nutrition tracking."
  },
  {
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    category: "Branding",
    title: "Modern Finance Rebrand",
    description: "A comprehensive rebranding for a financial services company to attract a younger audience."
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">OUR WORK</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have delivered exceptional results for our clients.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <motion.a 
            href="#portfolio" 
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
