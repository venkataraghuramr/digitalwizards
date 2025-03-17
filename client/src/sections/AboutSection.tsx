import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Industry Awards" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="relative animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700&q=80" 
                alt="Our team collaborating" 
                className="rounded-lg shadow-xl object-cover w-full h-[500px]" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-100 rounded-xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-500 opacity-10 rounded-xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 font-medium text-sm mb-4">ABOUT US</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Businesses Through Creative Digital Strategy</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Founded in 2015, Digital Wizards has been at the forefront of digital innovation, helping businesses transform their online presence through strategic marketing and cutting-edge design solutions.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Our team of creative strategists, designers, and developers work collaboratively to deliver results that exceed expectations and drive meaningful business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-indigo-700 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#team" 
              className="text-indigo-700 hover:text-indigo-800 inline-flex items-center font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Meet Our Team
              <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
