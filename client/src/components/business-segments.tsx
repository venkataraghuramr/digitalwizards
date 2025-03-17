
import { motion } from 'framer-motion';

const segments = [
  {
    title: "Small Business",
    description: "Perfect for startups and small businesses looking to establish their digital presence",
    features: ["Basic campaign setup", "Monthly reporting", "Email support"],
    price: "Starting at $500/mo"
  },
  {
    title: "Medium Business",
    description: "Comprehensive solutions for growing businesses ready to scale their digital marketing",
    features: ["Advanced campaign management", "Weekly reporting", "Priority support"],
    price: "Starting at $2000/mo"
  },
  {
    title: "Enterprise",
    description: "Custom solutions for large organizations with complex marketing needs",
    features: ["Multi-channel campaigns", "Daily optimization", "Dedicated manager"],
    price: "Custom pricing"
  }
];

export default function BusinessSegments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
              <p className="text-gray-600 mb-6">{segment.description}</p>
              <ul className="space-y-2 mb-6">
                {segment.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold text-purple-600">{segment.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
