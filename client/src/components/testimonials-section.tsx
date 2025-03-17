import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    quote: "Digital Wizards transformed our advertising strategy. We went from wasting money on ineffective ads to seeing consistent returns. Their team is responsive, knowledgeable, and truly cares about our success.",
    name: "Sarah Johnson",
    position: "CEO, FashionForward",
    rating: 5
  },
  {
    quote: "As a startup with limited resources, every dollar counts. Digital Wizards understood our constraints and delivered a campaign that generated 3x the leads we were getting before, at the same budget.",
    name: "Michael Chen",
    position: "Founder, TechSpark",
    rating: 5
  },
  {
    quote: "The Digital Wizards team feels like an extension of our marketing department. They're proactive, transparent, and continually find ways to improve our campaigns. Our ad performance has never been better.",
    name: "Laura Martinez",
    position: "Marketing Director, Bistro Group",
    rating: 4.5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimonials</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Digital Wizards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg relative">
              <CardContent className="p-8">
                <div className="text-primary text-4xl absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg text-primary font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="fill-current" />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <StarHalf className="fill-current" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
