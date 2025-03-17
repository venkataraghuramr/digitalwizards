import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { ContactFormData, submitContactForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    const { privacy, ...contactData } = data;
    contactMutation.mutate(contactData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">CONTACT US</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We'd love to hear from you. Contact us using the form below or reach out through our contact information.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-primary-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Innovation Drive, San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <i className="fas fa-phone text-primary-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-primary-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@digitalwizards.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <i className="fas fa-clock text-primary-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9AM to 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-sm h-80">
              {/* Google Maps would be embedded here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359.49682550194!2d-122.42075812167729!3d37.773439745468745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSoMa%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1686517321118!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Digital Wizards Office Location"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${errors.name ? 'border-red-500' : ''}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${errors.email ? 'border-red-500' : ''}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    {...register("subject")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1">Message</label>
                  <textarea 
                    id="contact-message"
                    rows={5} 
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${errors.message ? 'border-red-500' : ''}`}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="contact-privacy"
                    className={`mt-1 mr-2 ${errors.privacy ? 'border-red-500' : ''}`}
                    {...register("privacy")}
                  />
                  <label htmlFor="contact-privacy" className="text-gray-600 text-sm">
                    I agree to the <a href="#" className="text-primary-700 hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>
                )}
                <button 
                  type="submit" 
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-70"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
