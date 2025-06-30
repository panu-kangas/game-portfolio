import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center p-6 mt-8">
      <div className="flex justify-center space-x-6 items-center">
        <a
          href="mailto:kangas.panu@gmail.com"
          aria-label="Email"
          className="hover:text-green-400 transition-colors"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/panu-kangas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-green-400 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com/in/panu-kangas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-green-400 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Panu Kangas
      </p>
    </footer>
  )
}

export default Footer