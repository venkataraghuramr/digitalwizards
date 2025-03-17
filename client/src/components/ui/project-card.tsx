import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  delay?: number;
}

const ProjectCard = ({ image, category, title, description, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
          <div className="p-6">
            <span className="text-white text-sm font-medium bg-primary-700 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <a href="#" className="text-primary-700 hover:text-primary-800 inline-flex items-center font-medium">
          View Case Study
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
