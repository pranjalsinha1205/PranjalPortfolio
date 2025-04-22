"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:pranjal01sinha@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        pranjal01sinha@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Github className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a
                        href="https://github.com/pranjalsinha1205"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        github.com/pranjalsinha1205
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/pranjalsinha12/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        linkedin.com/in/pranjalsinha12
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="rounded-lg min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full rounded-2xl">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                  {submitSuccess && (
                    <p className="text-green-600 dark:text-green-400 text-center mt-4">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
