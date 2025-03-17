"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/Layout';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-amber-500 bg-clip-text text-transparent">
                Transform Your Digital Presence with Digital Wizards
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                We're a creative marketing agency that combines strategy, design, and technology to help your business thrive in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-medium text-lg transition-all transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="bg-white hover:bg-gray-100 text-primary-700 border border-primary-700 px-8 py-3 rounded-full font-medium text-lg transition-all"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600">
                Ready to elevate your brand? Reach out to us and let's create something amazing together.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject (Optional)</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </QueryClientProvider>
  );
}