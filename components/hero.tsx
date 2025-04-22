"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Pranjal Sinha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Backend Developer & ML Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I specialize in building robust backend systems with Spring Boot, REST APIs, and JWT authentication. I'm
              also passionate about machine learning, exploratory data analysis, and creating data-driven applications
              with real-world impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-2xl">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a
                  href="https://drive.google.com/file/d/104RgxFrcFow187e_JROKw9NzcTr17TQu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/pranjalsinha1205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjalsinha12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:pranjal01sinha@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <Image
                src="/profile_picture.jpg"
                alt="Pranjal Sinha"
                width={300}
                height={300}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
