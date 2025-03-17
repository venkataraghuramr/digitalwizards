import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter"; // Replaced import

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-black/40 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className={cn("text-2xl font-bold font-poppins", isScrolled ? "text-primary" : "text-white")}>Digital<span className="text-yellow-400">Wizards</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => smoothScroll('home')} className={cn("font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}>Home</button>
            <Link href="/services" className={cn("font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}>Services</Link> {/* Modified Services link */}
            <button onClick={() => smoothScroll('about')} className={cn("font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}>About</button>
            <button onClick={() => smoothScroll('case-studies')} className={cn("font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}>Case Studies</button>
            <button onClick={() => smoothScroll('testimonials')} className={cn("font-medium transition-colors", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}>Testimonials</button>
            <button 
              onClick={() => smoothScroll('contact')} 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium px-5 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn("focus:outline-none", isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-yellow-300")}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden bg-white shadow-lg absolute top-full left-0 w-full", isOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 py-3">
            <button onClick={() => smoothScroll('home')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Home</button>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Services</Link> {/* Modified Services link */}
            <button onClick={() => smoothScroll('about')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2">About</button>
            <button onClick={() => smoothScroll('case-studies')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Case Studies</button>
            <button onClick={() => smoothScroll('testimonials')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2">Testimonials</button>
            <button 
              onClick={() => smoothScroll('contact')} 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium px-5 py-2 rounded-full hover:shadow-lg transition-all text-center"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}