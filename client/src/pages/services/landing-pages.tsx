
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { FaCode, FaCheckCircle } from 'react-icons/fa';

export default function LandingPageService() {
  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Landing Page Optimization</h1>
            <p className="text-xl mb-8">Convert more visitors into customers with high-performance landing pages.</p>
            <Button 
              onClick={() => smoothScroll('contact')}
              className="bg-indigo-400 text-gray-900 hover:bg-indigo-500"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Conversion-Focused Design</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-indigo-500 mr-2" />
                  Conversion-Focused Design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-indigo-500 mr-2" />
                  A/B Testing
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-indigo-500 mr-2" />
                  Mobile Optimization
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Landing Page Design"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
