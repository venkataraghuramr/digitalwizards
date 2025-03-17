import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-24 lg:pt-32 overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              We Turn <span className="gradient-text">Digital Dreams</span> Into Reality
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              A creative marketing agency crafting powerful digital experiences that captivate, convert, and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#services"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
              <motion.a
                href="#work"
                className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full font-medium text-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
            <div className="flex items-center space-x-8 mt-12">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Client" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Client" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Client" 
                />
              </div>
              <div>
                <p className="font-medium">Trusted by <span className="text-indigo-700">500+</span> clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-2xl blur opacity-75 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Digital marketing creative workspace" 
                className="relative rounded-2xl shadow-2xl" 
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="text-amber-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="font-bold">4.9/5</span>
              </div>
              <p className="text-sm">Based on 200+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;
