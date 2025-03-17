'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WizardLogo from "./ui/wizard-logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headerClass = `fixed w-full z-50 bg-white/90 backdrop-blur-sm ${
    scrolled ? "shadow-md py-2" : "shadow-sm py-4"
  } transition-all duration-300`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <WizardLogo />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-amber-500 bg-clip-text text-transparent">
              Digital Wizards
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-gray-900 hover:text-primary-700 transition-colors">
              Home
            </Link>
            <a href="#about" className="font-medium text-gray-600 hover:text-primary-700 transition-colors">
              About
            </a>
            <a href="#services" className="font-medium text-gray-600 hover:text-primary-700 transition-colors">
              Services
            </a>
            <a href="#work" className="font-medium text-gray-600 hover:text-primary-700 transition-colors">
              Work
            </a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-primary-700 transition-colors">
              Testimonials
            </a>
            <a href="#blog" className="font-medium text-gray-600 hover:text-primary-700 transition-colors">
              Blog
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="font-medium text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="font-medium text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="font-medium text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#work"
                className="font-medium text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Work
              </a>
              <a
                href="#testimonials"
                className="font-medium text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="font-medium text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="bg-primary-700 text-white py-2 px-4 rounded-lg font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;