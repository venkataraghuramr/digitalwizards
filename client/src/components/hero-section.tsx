import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-32 overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
              Where Marketing<br/>meets <span className="text-yellow-400 relative">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Magic</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              We transform your digital presence into revenue-generating campaigns with data-driven strategies and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => smoothScroll('contact')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-lg hover:opacity-90 font-medium px-8 py-6 text-lg"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => smoothScroll('services')}
                variant="outline" 
                className="bg-transparent border-2 border-purple-300 text-white hover:bg-white/10 hover:border-purple-200 font-medium px-8 py-6 text-lg"
                size="lg"
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative z-10 space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital marketing team working on strategy" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400">200+</div>
                <div className="text-white/80">Happy Clients</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400">95%</div>
                <div className="text-white/80">Success Rate</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400">$2M+</div>
                <div className="text-white/80">ROI Generated</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="500" height="500" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M47.7,-57.2C59.1,-45.8,64.1,-28.5,68.1,-10.2C72.1,8.1,75.2,27.5,67.1,40.3C59,53.1,39.8,59.3,21.2,63.1C2.6,67,-15.4,68.5,-31.2,62.8C-47,57.1,-60.6,44.1,-65.8,28.5C-71,12.9,-67.8,-5.3,-60.3,-20.1C-52.8,-34.9,-41,-46.3,-28,-56.2C-15,-66.1,-0.9,-74.4,12.1,-71.8C25.1,-69.2,36.2,-68.6,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,149.3C672,160,768,224,864,218.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
