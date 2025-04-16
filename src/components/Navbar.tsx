"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FiMenu, FiX, FiCode, FiSun, FiMoon } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const { theme, setTheme } = useTheme();

  // After mounting, we can safely show the UI that depends on client-side features
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    controls.start("visible");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact" },
  ];

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const bracketVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Only render theme toggle button if mounted to avoid hydration mismatch
  const renderThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <FiSun className="h-5 w-5" />
        ) : (
          <FiMoon className="h-5 w-5" />
        )}
      </button>
    );
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.div 
                initial="hidden"
                animate={controls}
                variants={logoVariants}
                className="flex items-center"
              >
                <motion.span 
                  variants={bracketVariants}
                  className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
                >
                  &lt;
                </motion.span>
                <motion.div 
                  variants={nameVariants}
                  className="relative mx-1"
                >
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                  <motion.span 
                    variants={dotVariants}
                    className="absolute -top-1 -right-2 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                  />
                </motion.div>
                <motion.span 
                  variants={bracketVariants}
                  className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
                >
                  /&gt;
                </motion.span>
                <motion.div
                  variants={bracketVariants}
                  className="ml-2 text-gray-800 dark:text-gray-200"
                >
                  <FiCode className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme toggle button */}
            <div className="ml-2">
              {renderThemeToggle()}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme toggle button for mobile */}
            {renderThemeToggle()}
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 