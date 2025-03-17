"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFilter, FiLock } from "react-icons/fi";
import { projects } from "@/data/portfolio-data";
import Image from "next/image";

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
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

  // Get all unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

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
            My Projects
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A collection of my work, side projects, and open source contributions
          </motion.p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <div className="flex items-center justify-center flex-wrap gap-3">
            <div className="flex items-center mr-2 text-gray-700 dark:text-gray-300">
              <FiFilter className="mr-2" />
              <span>Filter by:</span>
            </div>
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === null
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              } transition-colors`}
            >
              All
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === tech
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                } transition-colors`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <>
                    {project.liveUrl ? (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full group">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                          <h3 className="text-white text-xl font-bold p-4 text-center drop-shadow-md">
                            {project.title}
                          </h3>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <h3 className="text-white text-xl font-bold p-4 text-center drop-shadow-md">
                            {project.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                    {project.liveUrl ? (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full flex items-center justify-center">
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="h-24 hide-scrollbar mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                </div>
                <div className="max-h-24 hide-scrollbar mb-4">
                  <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                        className={`px-3 py-1 text-sm rounded-full mb-2 ${
                        tech === filter
                          ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
                <div className="mt-auto pt-4 flex justify-between">
                  {project.privateRepo ? (
                    <span className="text-gray-500 dark:text-gray-400 flex items-center">
                      <FiLock className="mr-1" /> Private Repo
                    </span>
                  ) : project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                    >
                      <FiGithub className="mr-1" /> Code
                    </Link>
                  ) : (
                    <span></span>
                  )}
                  {project.liveUrl || project.title === "3D House Visualization" || project.title === "Weather App" ? (
                    <Link
                      href={project.title === "3D House Visualization" ? "https://3d-house-neon.vercel.app/" : 
                           project.title === "Weather App" ? "https://weather-app-phi-nine-54.vercel.app/" : 
                           (project.liveUrl || "#")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                    >
                      Live Demo <FiExternalLink className="ml-1" />
                    </Link>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found with the selected filter.
            </p>
            <button
              onClick={() => setFilter(null)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Clear Filter
            </button>
          </motion.div>
        )}

        {/* Project Collaboration CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 