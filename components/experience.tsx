"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

interface Education {
  institution: string
  degree: string
  period: string
  gpa?: string
}

interface Certification {
  name: string
  issuer: string
  platform: string
  link: string
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: "Business Analysis Intern",
      company: "Practo provided by UpGrad Campus and MentorMinds",
      period: "June 2024 - August 2024",
      description: [
        "Conducted comprehensive data analysis on health and demographic dataset, identifying key indicators of heart disease.",
        "Implemented machine learning models to predict the likeability of a heart disease or attack on the basis of the given data.",
        "Predicted 89% of cases where the risk of a heart attack or disease was very high.",
      ],
    },
    {
      title: "Intern - Development",
      company: "AreteMinds Technologies Private Ltd.",
      period: "June 2024 - July 2024",
      description: [
        "Developed and implemented RESTful APIs using Spring Boot.",
        "Integrated JWT authentication to enhance application security, ensuring compliance with industry standards.",
        "Collaborated with cross-functional teams to deliver high-quality software within deadlines.",
      ],
    },
  ]

  const education: Education[] = [
    {
      institution: "Lovely Professional University, Jalandhar, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug 2022 - Present",
      gpa: "8.28",
    },
  ]

  const certifications: Certification[] = [
    {
      name: "Google Data Analytics Specialization",
      issuer: "Google",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/U3NLEKVJTCWM",
    },
    {
      name: "Google Workspace Specialization",
      issuer: "Google",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/2PJG785YMJD8",
    },
    {
      name: "Introduction to Cloud Computing",
      issuer: "IBM",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/GVQSTRRX0OMO",
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/5XQFD99L3U9W",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold flex items-center"
            >
              <Briefcase className="mr-2 text-primary" /> Professional Experience
            </motion.h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                    <CardDescription>{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold flex items-center"
            >
              <GraduationCap className="mr-2 text-primary" /> Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardHeader>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                    <CardDescription>{edu.period}</CardDescription>
                    {edu.gpa && <CardDescription>GPA: {edu.gpa}</CardDescription>}
                  </CardHeader>
                </Card>
              </motion.div>
            ))}

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold flex items-center mt-12"
            >
              <Award className="mr-2 text-primary" /> Certifications
            </motion.h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardHeader>
                    <CardTitle>{cert.name}</CardTitle>
                    <CardDescription>
                      {cert.issuer} | {cert.platform}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
