import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { LeadFormData, submitLeadForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().optional(),
  message: z.string().optional()
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

const CTASection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const leadMutation = useMutation({
    mutationFn: (data: LeadFormData) => submitLeadForm(data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your request has been submitted. We'll get back to you shortly.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: LeadFormValues) => {
    leadMutation.mutate(data);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white clip-path-slant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how we can help your business grow with our tailored digital marketing strategies and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#contact"
                className="bg-white text-indigo-800 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.a>
              <motion.a
                href="#services"
                className="bg-transparent hover:bg-white/10 border-2 border-white px-8 py-3 rounded-full font-medium text-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Lead Generation Form */}
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
              <p className="text-gray-600 mb-6">Fill out this form and we'll get back to you within 24 hours.</p>
              <form id="lead-form" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name" 
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com" 
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900"
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="seo">SEO & Content Strategy</option>
                    <option value="branding">Brand Identity</option>
                    <option value="content">Content Production</option>
                    <option value="app-development">Mobile App Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900"
                    placeholder="Tell us about your project"
                    {...register("message")}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-70"
                  disabled={leadMutation.isPending}
                >
                  {leadMutation.isPending ? "Submitting..." : "Submit Request"}
                </button>
                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to our <a href="#" className="text-primary-700 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
