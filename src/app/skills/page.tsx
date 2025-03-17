"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";

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
            My Skills
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Here's a comprehensive list of my technical skills and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              Other Skills
            </motion.h2>
            <motion.div variants={fadeIn}>
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Categories */}
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
            Skill Categories
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="mb-6">
                Creating responsive, interactive, and user-friendly interfaces using modern frontend technologies.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Responsive Web Design</li>
                <li>Single Page Applications</li>
                <li>UI/UX Implementation</li>
                <li>State Management</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="mb-6">
                Building robust server-side applications, APIs, and database integrations.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>RESTful API Design</li>
                <li>Database Management</li>
                <li>Authentication & Authorization</li>
                <li>Server-side Rendering</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Development Tools</h3>
              <p className="mb-6">
                Utilizing industry-standard tools and practices for efficient development workflows.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Version Control (Git)</li>
                <li>CI/CD Pipelines</li>
                <li>Containerization</li>
                <li>Testing & Debugging</li>
                <li>Agile Development</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 