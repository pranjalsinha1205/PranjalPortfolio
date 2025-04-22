"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  skills: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Spring Boot", "Flask", "React", "Next.js", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "NLTK"],
    },
    {
      name: "Tools & Technologies",
      skills: [
        "Git",
        "Docker",
        "REST APIs",
        "JWT Authentication",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Jupyter Notebook",
      ],
    },
    {
      name: "ML & Data Science",
      skills: [
        "Machine Learning",
        "Data Analysis",
        "Neural Networks",
        "NLP",
        "Sentiment Analysis",
        "Data Visualization",
        "Statistical Analysis",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans backend development, machine learning, and data analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={item}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
