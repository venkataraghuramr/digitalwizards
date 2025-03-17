import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["E-commerce", "Google Ads"],
    title: "Fashion Retailer Sees 450% ROAS",
    description: "How we helped a struggling fashion brand turn around their advertising performance and achieve record sales.",
    stats: [
      { value: "450%", label: "ROAS" },
      { value: "+178%", label: "Conversions" }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["SaaS", "Meta Ads"],
    title: "SaaS Startup Cuts CAC by 62%",
    description: "Our targeted Facebook campaign strategy helped this B2B SaaS company acquire customers at a fraction of the cost.",
    stats: [
      { value: "-62%", label: "CAC" },
      { value: "+320%", label: "Demo Requests" }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categories: ["Restaurant", "Local SEO"],
    title: "Restaurant Chain Boosts Bookings",
    description: "How our integrated digital strategy helped a local restaurant chain increase reservations during slow seasons.",
    stats: [
      { value: "+82%", label: "Reservations" },
      { value: "+46%", label: "Local Search" }
    ]
  }
];

const categoryColors: Record<string, string> = {
  "E-commerce": "bg-primary/10 text-primary",
  "Google Ads": "bg-green-100 text-green-800",
  "SaaS": "bg-primary/10 text-primary",
  "Meta Ads": "bg-blue-100 text-blue-800",
  "Restaurant": "bg-primary/10 text-primary",
  "Local SEO": "bg-yellow-100 text-yellow-800"
};

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Case <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Studies</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4 gap-2 flex-wrap">
                  {study.categories.map((category, catIndex) => (
                    <Badge key={catIndex} variant="outline" className={categoryColors[category] || ""}>
                      {category}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-primary font-bold text-xl">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="text-primary font-medium p-0 hover:underline">
                  Read Case Study <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
