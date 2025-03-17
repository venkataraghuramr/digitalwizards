
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { FaChartLine, FaCheckCircle } from 'react-icons/fa';

export default function AnalyticsReportingService() {
  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Analytics & Reporting</h1>
            <p className="text-xl mb-8">Gain actionable insights from your marketing data with comprehensive analytics and reporting solutions.</p>
            <Button 
              onClick={() => smoothScroll('contact')}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
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
              <h2 className="text-3xl font-bold mb-6">Data-Driven Insights</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  Custom Dashboard Creation
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  Regular Performance Reports
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  Data-Driven Optimization
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Analytics Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
