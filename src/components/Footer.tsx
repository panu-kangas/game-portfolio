import React, { useState, useRef, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [copied, setCopied] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const email = 'kangas.panu@gmail.com'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setShowEmailPopup(false)
        setCopied(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const togglePopup = () => {
    setShowEmailPopup((prev) => !prev)
    setCopied(false)
  }

  return (
    <footer className="bg-gray-800 text-gray-400 text-center p-6 mt-8">
      <div className="flex justify-center gap-6 items-center relative">

        {/* Email Icon + Popup */}
        <div className="relative flex items-center justify-center">
          <button
            ref={buttonRef}
            onClick={togglePopup}
            aria-label="Show Email"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </button>

          {showEmailPopup && (
            <div
              ref={popupRef}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-700 border border-green-400 text-white text-sm rounded-lg px-4 py-2 shadow-lg z-50"
            >
              <div className="flex flex-col items-center">
                <span className="font-mono mb-2">{email}</span>
                <button
                  onClick={handleCopy}
                  className="text-sm px-3 py-1 rounded-md bg-green-500 hover:bg-green-400 text-black transition"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/panu-kangas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-green-400 transition-colors flex items-center justify-center"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/panu-kangas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-green-400 transition-colors flex items-center justify-center"
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
