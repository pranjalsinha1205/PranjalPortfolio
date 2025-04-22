import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Pranjal</span> Sinha
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Backend Developer & ML Enthusiast</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/pranjalsinha1205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranjalsinha12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pranjal01sinha@gmail.com"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Pranjal Sinha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
