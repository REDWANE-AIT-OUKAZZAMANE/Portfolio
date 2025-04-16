"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiLock } from "react-icons/fi";
import { personalInfo, projects, skills } from "@/data/portfolio-data";
import { useEffect } from "react";
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript, 
  SiVuedotjs, 
  SiAngular, 
  SiPython, 
  SiSpring, 
  SiMysql, 
  SiDocker 
} from "react-icons/si";
import { DiJava } from "react-icons/di";

// Animation constants
const floatingIcons = [
  { icon: SiJavascript, color: "#F7DF1E", size: 60, initialX: 20, initialY: 20 },
  { icon: SiReact, color: "#61DAFB", size: 70, initialX: 70, initialY: 60 },
  { icon: SiNextdotjs, color: "#000000", size: 65, initialX: 180, initialY: 120 },
  { icon: SiTailwindcss, color: "#06B6D4", size: 75, initialX: 300, initialY: 50 },
  { icon: SiNodedotjs, color: "#339933", size: 65, initialX: 220, initialY: 180 },
  { icon: SiMongodb, color: "#47A248", size: 60, initialX: 80, initialY: 220 },
  { icon: SiTypescript, color: "#3178C6", size: 68, initialX: 250, initialY: 280 },
  { icon: SiVuedotjs, color: "#4FC08D", size: 72, initialX: 150, initialY: 320 },
  { icon: SiAngular, color: "#DD0031", size: 70, initialX: 350, initialY: 150 },
  { icon: DiJava, color: "#007396", size: 75, initialX: 300, initialY: 220 },
  { icon: SiPython, color: "#3776AB", size: 72, initialX: 120, initialY: 250 },
  { icon: SiSpring, color: "#6DB33F", size: 65, initialX: 380, initialY: 300 },
  { icon: SiMysql, color: "#4479A1", size: 68, initialX: 200, initialY: 350 },
  { icon: SiDocker, color: "#2496ED", size: 70, initialX: 330, initialY: 380 }
];

export default function Home() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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

  const floatAnimation = (index: number) => {
    // Create unique random animation for each icon
    const randomX = Math.sin(index) * 40;
    const randomY = Math.cos(index) * 40;
    const randomDuration = 10 + (index % 5) * 2;
    const randomDelay = index * 0.2;
    
    return {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: [0.3, 0.9, 0.3],
        scale: [0.8, 1.2, 0.8],
        x: [randomX, -randomX, randomX],
        y: [randomY, -randomY, randomY],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: randomDuration,
          repeat: Infinity,
          delay: randomDelay,
          ease: "easeInOut"
        }
      }
    };
  };

  const repelAnimation = {
    scale: 2,
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.4 },
    y: 20,
    x: 20,
    zIndex: 10
  };

  // Featured projects (show only 3)
  const featuredProjects = projects.slice(0, 3);

  // Featured skills (show 6 with highest level)
  const featuredSkills = [...skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, 6);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Floating Programming Icons - Positioned as background */}
        <div className="absolute inset-0 right-0 overflow-hidden">
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              variants={floatAnimation(index)}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 2.2,
                rotate: [0, 15, -15, 0],
                transition: { duration: 0.4 },
                y: index % 2 === 0 ? -20 : 20,
                x: index % 2 === 0 ? -20 : 20,
                zIndex: 10
              }}
              style={{ 
                position: 'absolute',
                right: `${index % 4 * 90 + 30}px`, 
                top: `${Math.floor(index / 4) * 120 + 60}px`,
                width: icon.size,
                height: icon.size,
                color: icon.color
              }}
              className="flex items-center justify-center opacity-40 lg:opacity-100 cursor-pointer"
            >
              <icon.icon size={icon.size} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="z-20 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-600 dark:border-indigo-400 shadow-md">
                <Image 
                  src="/images/projects/Me.png" 
                  alt={personalInfo.name}
                  fill
                  sizes="4rem"
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name.split(" ")[0]}</span>
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium flex items-center gap-2 transition-colors"
              >
                View Projects <FiArrowRight />
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-md font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              {personalInfo.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
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
          </motion.div>
          
          {/* Empty right column to maintain grid structure */}
          <div className="hidden lg:block"></div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Skills
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Here are some of the technologies I work with
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {featuredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full mx-1 ${
                        i < skill.level
                          ? "bg-indigo-600 dark:bg-indigo-400"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-center mt-10"
          >
            <Link
              href="/skills"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              View all skills <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Check out some of my recent work
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <Link href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="block h-full w-full group">
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
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                    {project.title}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="h-20 hide-scrollbar mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                </div>
                <div className="max-h-24 hide-scrollbar mb-4">
                  <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full mb-2"
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
                      href={project.title === "3D House Visualization" ? "https://3d-house-esd2baqim-redwane-ait-oukazzamanes-projects.vercel.app/" : 
                           project.title === "Weather App" ? "https://weather-app-phi-nine-54.vercel.app/" : 
                           (project.liveUrl || "#")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                    >
                      Live Demo <FiArrowRight className="ml-1" />
                    </Link>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            View all projects <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-white mb-4"
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8"
            >
              I'm currently available for freelance work or full-time positions.
              If you're interested in working together, get in touch!
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Me <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
