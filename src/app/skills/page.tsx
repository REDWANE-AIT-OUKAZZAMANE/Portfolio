"use client";

import { motion } from "framer-motion";
import { skills, certificates, education, languages } from "@/data/portfolio-data";
import { FiAward, FiExternalLink, FiBook } from "react-icons/fi";

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level * 20}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          style={{ width: `${level * 20}%` }}
        ></div>
      </div>
    </div>
  );

  // Specialized component for languages with flags
  const LanguageBar = ({ name, level, flag }: { name: string; level: number; flag?: string }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium flex items-center">
          {flag && <span className="mr-2 text-xl">{flag}</span>}
          {name}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level * 20}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
          style={{ width: `${level * 20}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Skills & Education
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills, languages, and educational background
          </motion.p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Education
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <FiBook className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {edu.institution} | {edu.location}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {edu.period}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">FE</span>
              </span>
              Frontend Development
            </motion.h2>
            <motion.div variants={fadeIn}>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">BE</span>
              </span>
              Backend Development
            </motion.h2>
            <motion.div variants={fadeIn}>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">OT</span>
              </span>
              Technical Tools
            </motion.h2>
            <motion.div variants={fadeIn}>
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Languages and Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Languages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">LG</span>
              </span>
              Languages
            </motion.h2>
            <motion.div variants={fadeIn}>
              {languages.map((language) => (
                <LanguageBar 
                  key={language.name} 
                  name={language.name} 
                  level={language.level} 
                  flag={language.flag} 
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-sm font-bold">SS</span>
              </span>
              Soft Skills
            </motion.h2>
            <motion.div variants={fadeIn}>
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Certificates & Credentials
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <FiAward className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {certificate.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Issued: {certificate.date}
                    </p>
                    {certificate.url && (
                      <a 
                        href={certificate.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        View Certificate <FiExternalLink className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 