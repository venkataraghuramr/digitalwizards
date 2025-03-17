import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { 
  FaGoogle, 
  FaFacebook, 
  FaChartLine, 
  FaCode, 
  FaBullhorn, 
  FaSearch 
} from "react-icons/fa";

const services = [
  {
    icon: <FaGoogle className="text-3xl text-purple-600" />,
    title: "Google Ads Optimization",
    description: "Strategic campaign management that targets high-intent customers and maximizes your advertising ROI.",
    features: [
      "Search & Display Networks",
      "Shopping & Remarketing",
      "Conversion Tracking"
    ]
  },
  {
    icon: <FaFacebook className="text-3xl text-purple-700" />,
    title: "Meta Ads Management",
    description: "Targeted Facebook and Instagram advertising campaigns that connect with your ideal audience and drive engagement.",
    features: [
      "Advanced Audience Targeting",
      "Creative Ad Development",
      "A/B Testing & Optimization"
    ]
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and insights that reveal the true ROI of your marketing efforts and guide optimization.",
    features: [
      "Custom Dashboard Creation",
      "Regular Performance Reports",
      "Data-Driven Optimization"
    ]
  },
  {
    icon: <FaCode className="text-3xl text-indigo-600" />,
    title: "Landing Page Optimization",
    description: "High-conversion landing pages designed to turn visitors into customers and maximize ad performance.",
    features: [
      "Conversion-Focused Design",
      "A/B Testing",
      "Mobile Optimization"
    ]
  },
  {
    icon: <FaBullhorn className="text-3xl text-yellow-600" />,
    title: "Social Media Management",
    description: "Strategic content creation and community engagement to build your brand presence across platforms.",
    features: [
      "Content Calendar Development",
      "Engagement Strategy",
      "Performance Analytics"
    ]
  },
  {
    icon: <FaSearch className="text-3xl text-purple-600" />,
    title: "SEO Strategy",
    description: "Organic visibility improvements that drive sustainable traffic and complement your paid advertising efforts.",
    features: [
      "Technical SEO Audits",
      "Content Optimization",
      "Backlink Strategy"
    ]
  }
];

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent relative inline-block">
            Services
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400/60 rounded-full"></span>
          </span></h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            We deliver comprehensive digital marketing solutions designed to maximize your return on ad spend.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6
                ${index === 0 ? "bg-purple-100" : 
                  index === 1 ? "bg-indigo-100" : 
                  index === 2 ? "bg-yellow-100" : 
                  index === 3 ? "bg-purple-100" : 
                  index === 4 ? "bg-yellow-100" : 
                  "bg-indigo-100"}
              `}>
                <div className={`text-2xl
                  ${index === 0 ? "text-purple-600" : 
                    index === 1 ? "text-indigo-600" : 
                    index === 2 ? "text-yellow-600" : 
                    index === 3 ? "text-purple-600" : 
                    index === 4 ? "text-yellow-600" : 
                    "text-indigo-600"}
                `}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`mt-1 mr-2 h-4 w-4 ${
                      index === 0 ? "text-purple-600" : 
                      index === 1 ? "text-indigo-600" : 
                      index === 2 ? "text-yellow-600" : 
                      index === 3 ? "text-purple-600" : 
                      index === 4 ? "text-yellow-600" : 
                      "text-indigo-600"
                    }`} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => smoothScroll('contact')} 
                variant="link" 
                className={`font-medium p-0 hover:underline ${
                  index === 0 ? "text-purple-600" : 
                  index === 1 ? "text-indigo-600" : 
                  index === 2 ? "text-yellow-600" : 
                  index === 3 ? "text-purple-600" : 
                  index === 4 ? "text-yellow-600" : 
                  "text-indigo-600"
                }`}
              >
                Learn more &rarr;
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            onClick={() => smoothScroll('contact')} 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium px-8 py-6 rounded-full hover:shadow-lg transition-all hover:opacity-90"
            size="lg"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
