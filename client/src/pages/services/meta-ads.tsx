
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaCheckCircle } from "react-icons/fa";

export default function MetaAdsService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Meta Ads Management
            </motion.h1>
            <p className="text-xl text-white/90">
              Targeted Facebook and Instagram advertising campaigns that connect with your ideal audience and drive engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Meta Ads Services</h2>
            <div className="space-y-4">
              {[
                "Advanced Audience Targeting",
                "Creative Ad Development",
                "A/B Testing & Optimization",
                "Cross-platform Integration",
                "Performance Analytics"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Start Your Campaign</h3>
            <p className="mb-6">Ready to reach your ideal audience on Facebook and Instagram? Let's create your strategy.</p>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
