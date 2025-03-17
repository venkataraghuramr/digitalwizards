import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: (data: NewsletterFormValues) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong!",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    newsletterMutation.mutate(data);
    setIsSubmitting(false);
  };

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
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold font-poppins">Digital<span className="text-secondary">Wizards</span></span>
            </a>
            <p className="text-gray-400 mb-6">
              We transform your digital marketing with data-driven strategies and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-poppins mb-6">Services</h3>
            <ul className="space-y-3">
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">Google Ads Optimization</button></li>
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">Meta Ads Management</button></li>
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">Analytics & Reporting</button></li>
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">Landing Page Optimization</button></li>
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">Social Media Management</button></li>
              <li><button onClick={() => smoothScroll('services')} className="text-gray-400 hover:text-white transition-colors">SEO Strategy</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-poppins mb-6">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={() => smoothScroll('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => smoothScroll('case-studies')} className="text-gray-400 hover:text-white transition-colors">Case Studies</button></li>
              <li><button onClick={() => smoothScroll('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><button onClick={() => smoothScroll('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-poppins mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for digital marketing tips and industry insights.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-r-none focus:ring-2 focus:ring-primary"
                  {...register("email")}
                />
                <Button 
                  type="submit" 
                  className="bg-primary px-4 py-2 rounded-l-none hover:bg-secondary transition-colors"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane />
                </Button>
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2023 Digital Wizards. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
