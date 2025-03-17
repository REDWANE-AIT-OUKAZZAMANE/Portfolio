"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { hobbies } from "@/data/hobbies-data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Hobbies() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            My Hobbies & Interests
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Beyond coding, here are some things I'm passionate about
          </motion.p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0">
                  <PlaceholderImage title={hobby.title} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <h3 className="text-white text-2xl font-bold p-4 text-center drop-shadow-md flex items-center z-10">
                    <span className="mr-3">{<hobby.icon className="h-6 w-6" />}</span>
                    {hobby.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-lg text-center"
        >
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
            "We don't just write code; we create solutions that reflect who we are. Our hobbies and interests shape our perspective and bring unique value to everything we build."
          </blockquote>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            — A reminder that well-rounded developers make better problem solvers
          </p>
        </motion.div>
      </div>
    </div>
  );
} 