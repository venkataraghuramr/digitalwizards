import { Button } from "@/components/ui/button";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold font-poppins mb-6">About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Wizards</span></h2>
            
            <p className="text-gray-600 mb-6">
              Founded in 2015, Digital Wizards has helped over 200 businesses transform their digital marketing efforts into profitable growth engines. Our team of certified marketing specialists combines data-driven strategy with creative excellence to deliver exceptional results.
            </p>
            
            <p className="text-gray-600 mb-8">
              What sets us apart is our relentless focus on ROI. We don't just create campaigns; we create revenue. Our transparent reporting and optimization process ensures every dollar spent works harder for your business.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15M+</div>
                <div className="text-gray-600">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">350%</div>
                <div className="text-gray-600">Avg. ROAS</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => smoothScroll('services')} 
                variant="outline"
                className="text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
              >
                Our Services
              </Button>
              <Button 
                onClick={() => smoothScroll('contact')} 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all"
              >
                Work With Us
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Wizards team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white text-xs text-primary font-bold">JD</div>
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border-2 border-white text-xs text-secondary font-bold">SW</div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white text-xs text-primary font-bold">KL</div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Our certified experts</p>
                    <p className="text-xs text-gray-500">Google & Meta Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute top-20 right-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path fill="#6A26CD" d="M156.4,-143.5C193.2,-93.4,209.6,-28.7,197.1,25.4C184.5,79.5,143,123.1,93.5,142.4C43.9,161.7,-13.6,156.7,-64.5,134.7C-115.4,112.6,-159.7,73.4,-171.7,23.7C-183.8,-26,-163.5,-86.2,-126.5,-136.4C-89.6,-186.5,-35.8,-226.5,11.9,-236.4C59.5,-246.2,119.6,-193.6,156.4,-143.5Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
