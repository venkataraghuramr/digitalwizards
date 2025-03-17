
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGoogle, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function GoogleAdsService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Google Ads Optimization
            </motion.h1>
            <p className="text-xl text-white/90">
              Strategic campaign management that targets high-intent customers and maximizes your advertising ROI.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Google Ads Service?</h2>
            <div className="space-y-4">
              {[
                "Data-driven campaign optimization",
                "Advanced audience targeting",
                "Continuous performance monitoring",
                "Regular ROI reporting",
                "A/B testing and optimization"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
            <p className="mb-6">Ready to transform your Google Ads performance? Schedule a free consultation with our experts.</p>
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              size="lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
