"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  githubLink: string
  demoLink?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Exoplanet Habitability Prediction",
      description: "Using machine learning algorithms and Flask to evaluate sustainability of life on exoplanets.",
      image: "/exoplanet.png?height=400&width=600",
      techStack: ["Python", "Flask", "Machine Learning", "Scikit-learn", "Pandas"],
      githubLink: "https://github.com/pranjalsinha1205/ExoplanetHabitabilityProject",
    },
    {
      id: 2,
      title: "Solar Storm Prediction Application",
      description:
        "Using machine learning algorithms, NASA real-time data, and an interactive Full Stack environment to predict the likelihood of a Solar Storm.",
      image: "/solar_storm.jpg?height=400&width=600",
      techStack: ["Python", "Machine Learning", "NASA API", "Full Stack", "Data Analysis"],
      githubLink: "https://github.com/pranjalsinha1205/SolarStormPrediction",
    },
    {
      id: 3,
      title: "Global Economic Indicators Analysis",
      description: "Exploratory Data Analysis highlighting post-COVID economic patterns and key development metrics.",
      image: "/global_eda.png?height=400&width=600",
      techStack: ["Python", "Pandas", "Data Visualization", "Statistical Analysis", "Jupyter Notebook"],
      githubLink: "https://github.com/pranjalsinha1205/GlobalEconomicIndicatorsDataAnalysis",
    },
    {
      id: 4,
      title: "Mental Health Chatbot",
      description:
        "Built using NLTK and neural networks to provide accessible emotional support and visual sentiment analysis.",
      image: "/chatbot.jpg?height=400&width=600",
      techStack: ["Python", "NLTK", "Neural Networks", "NLP", "Sentiment Analysis"],
      githubLink: "https://github.com/pranjalsinha1205/MentalHealthChatbotTriumphTidings.github.io",
    },
    {
      id: 5,
      title: "Personal Blogging Website",
      description:
        "A personal blogging website made using Java SpringBoot for backend. It uses JWT for authentication and authorization and thereby makes use of an RBAC architecture for secure transactions.",
      image: "/blog.png?height=400&width=600",
      techStack: ["Java", "Spring Boot", "JWT", "RBAC", "REST API"],
      githubLink: "https://github.com/pranjalsinha1205/PersonalBlog",
    },
    {
      id: 6,
      title: "Heart Disease Prediction and Analysis",
      description:
        "An Exploratory Data Analysis project to find trends and patterns for Heart attacks or diseases in adults, it also makes use of ML models to predict heart attacks.",
      image: "/heart.png?height=400&width=600",
      techStack: ["Python", "Machine Learning", "Data Analysis", "Healthcare", "Predictive Modeling"],
      githubLink: "https://github.com/pranjalsinha1205/HeartDiseaseIndicatorinternship",
    },
  ]

  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend development, machine learning, and
            data analysis.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.demoLink && (
                    <Button asChild size="sm" className="rounded-full">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <Button onClick={loadMore} size="lg" className="rounded-2xl">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
