import { motion } from "framer-motion";

interface BlogCardProps {
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  excerpt: string;
  delay?: number;
}

const BlogCard = ({ 
  image, 
  category, 
  categoryColor, 
  date, 
  title, 
  excerpt, 
  delay = 0 
}: BlogCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 left-4 ${categoryColor} text-white text-sm font-medium px-3 py-1 rounded-full`}>
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <i className="far fa-calendar mr-2"></i>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        <a href="#" className="text-primary-700 hover:text-primary-800 inline-flex items-center font-medium">
          Read More
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
