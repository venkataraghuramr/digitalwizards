import { useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
import WizardLogo from "./ui/wizard-logo";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const Footer = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: ""
    }
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: SubscribeFormData) => {
      const res = await apiRequest("POST", "/api/subscribe", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: SubscribeFormData) => {
    subscribeMutation.mutate(data);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <WizardLogo white />
              <span className="text-xl font-bold text-white">Digital Wizards</span>
            </div>
            <p className="text-gray-400 mb-6">
              We craft digital experiences that captivate, engage, and convert. Our team of experts is dedicated to helping your business grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-indigo-700 p-2 rounded-full transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-indigo-700 p-2 rounded-full transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-indigo-700 p-2 rounded-full transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-indigo-700 p-2 rounded-full transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Design & Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">SEO & Content Strategy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Content Production</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and insights.
            </p>
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-white ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <button 
                type="submit" 
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-70"
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Digital Wizards. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
