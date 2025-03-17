"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </footer>
  );
};

export default Footer; 