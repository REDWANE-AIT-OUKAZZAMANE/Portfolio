"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHome, FiUser, FiCode, FiBriefcase, FiHeart, FiMessageSquare } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home", icon: <FiHome className="h-4 w-4 mr-2" /> },
    { href: "/about", label: "About", icon: <FiUser className="h-4 w-4 mr-2" /> },
    { href: "/skills", label: "Skills", icon: <FiCode className="h-4 w-4 mr-2" /> },
    { href: "/projects", label: "Projects", icon: <FiBriefcase className="h-4 w-4 mr-2" /> },
    { href: "/hobbies", label: "Hobbies", icon: <FiHeart className="h-4 w-4 mr-2" /> },
    { href: "/contact", label: "Contact", icon: <FiMessageSquare className="h-4 w-4 mr-2" /> },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors flex items-center"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{personalInfo.location}</p>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors flex items-center mb-2"
            >
              <FiMail className="h-4 w-4 mr-2" />
              {personalInfo.email}
            </Link>
            <div className="flex space-x-4 mt-4">
              {personalInfo.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {link.platform === "GitHub" ? (
                    <FiGithub className="h-5 w-5" />
                  ) : link.platform === "LinkedIn" ? (
                    <FiLinkedin className="h-5 w-5" />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.bio}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="h-6 w-6" />
              </Link>
              {personalInfo.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {link.platform === "GitHub" ? (
                    <FiGithub className="h-6 w-6" />
                  ) : link.platform === "LinkedIn" ? (
                    <FiLinkedin className="h-6 w-6" />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 