import { motion } from "framer-motion";
import BlogCard from "@/components/ui/blog-card";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
    category: "SEO",
    categoryColor: "bg-primary-700",
    date: "Oct 15, 2023",
    title: "10 SEO Strategies That Still Work in 2023",
    excerpt: "Discover the proven SEO techniques that continue to drive organic traffic and improve search rankings."
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
    category: "Social Media",
    categoryColor: "bg-amber-500",
    date: "Oct 8, 2023",
    title: "The Ultimate Guide to TikTok Marketing",
    excerpt: "Learn how to leverage TikTok's growing platform to reach new audiences and drive engagement with your brand."
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
    category: "Web Design",
    categoryColor: "bg-blue-600",
    date: "Oct 1, 2023",
    title: "7 Web Design Trends Dominating 2023",
    excerpt: "Explore the latest web design trends that are shaping user experiences and setting brands apart."
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">OUR BLOG</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Insights</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our marketing experts.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              categoryColor={post.categoryColor}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <motion.a 
            href="#blog" 
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
