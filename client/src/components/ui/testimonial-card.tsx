import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  delay?: number;
}

const TestimonialCard = ({ quote, name, position, image, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-secondary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-amber-500 mb-4">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
      <div className="absolute -top-4 left-8 text-5xl text-primary-200 opacity-50">
        <i className="fas fa-quote-left"></i>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
