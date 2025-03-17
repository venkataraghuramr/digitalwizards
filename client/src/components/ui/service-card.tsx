import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="bg-primary-50 rounded-lg inline-block p-4 mb-6"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${icon} text-primary-700 text-2xl`}></i>
      </motion.div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-700 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="fas fa-check text-primary-700 mt-1 mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="text-primary-700 hover:text-primary-800 inline-flex items-center font-medium">
        Learn More
        <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-2"></i>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
