"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiMail, FiCalendar, FiBriefcase, FiBook, FiGlobe } from "react-icons/fi";
import { personalInfo, experiences, education, languages } from "@/data/portfolio-data";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  // Custom experiences based on user input
  const customExperiences = [
    {
      title: "Full Stack Engineer",
      company: "Squarefeet",
      location: "Remote",
      startDate: "2023",
      endDate: "Present",
      description: "Automating marketing materials, leasing documents, leasing floor plans, reports, and validations in one CRM. Technologies: VueJs, ReactJs, NestJs, GraphQL, Prisma, CRM, GitLab, Nginx"
    },
    {
      title: "Full Stack Developer",
      company: "Hahn Software SARL",
      location: "Morocco",
      startDate: "2022",
      endDate: "2023",
      description: "Led the development of a comprehensive IT Support System. Technologies: Java, Spring Boot, Java Swing, MigLayout, Oracle Database, Docker, Jenkins, Maven, GitHub, JUnit 5, OpenAPI"
    },
    {
      title: "Full Stack Developer",
      company: "Soclicagency",
      location: "Morocco",
      startDate: "2021",
      endDate: "2022",
      description: "Design and development of clients digital solutions. Technologies: Java, Jira, Slack, WordPress, Spring Boot, React, VueJS, Postman, Maven, Git"
    },
    {
      title: "Full Stack Developer",
      company: "XHUB Casablanca",
      location: "Casablanca, Morocco",
      startDate: "2020",
      endDate: "2021",
      description: "Design and development of an interactive social media wall. Technologies: Java, Jira, Slack, Spring Boot, React, Postman, Maven, GitLab, Python, Jenkins"
    }
  ];

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
            variants={scaleIn}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Get to know more about me, my background, and what I do
          </motion.p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={fadeInLeft}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who am I?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Creative Developer with 4 years of expertise in crafting innovative digital
              solutions. As a tech enthusiast, I transform complex challenges into elegant,
              user-centric applications by combining artistic vision with technical prowess.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Throughout my career, I've architected and delivered enterprise-level
              applications using cutting-edge technologies, pioneered responsive and
              intuitive user interfaces that enhance user engagement, and implemented
              scalable backend solutions capable of handling thousands of concurrent users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My experience spans developing mission-critical systems across diverse
              industry sectors while maintaining a perfect record of project delivery success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FiMapPin className="mr-3 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FiMail className="mr-3 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInRight}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative h-80 lg:h-auto rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/projects/Me.png" 
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 20rem, 30rem"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Languages
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {languages.map((language, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-2xl">{language.flag}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {language.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                    style={{ width: `${(language.level / 5) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Professional Experience
          </motion.h2>
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-indigo-200 dark:bg-indigo-900"
            ></motion.div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {customExperiences.map((experience, index) => (
                <motion.div 
                  key={index}
                  variants={timelineItemVariants}
                  custom={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10"
                  ></motion.div>
                  
                  {/* Content */}
                  <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                    >
                      <div className="flex items-center mb-2">
                        <FiBriefcase className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {experience.company}, {experience.location}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <FiCalendar className="mr-2" />
                        <span>{experience.startDate} - {experience.endDate}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {experience.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Education
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-2">
                  <FiBook className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {edu.institution}, {edu.location}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  GPA: {edu.gpa}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 