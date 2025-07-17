import { useEffect, useRef } from 'react'
import { FaHtml5, FaUnity, FaReact } from 'react-icons/fa'
import { SiGodotengine, SiTypescript } from 'react-icons/si'
import SfmlLogo from '../assets/sfml_logo.png'
import CLogo from '../assets/c_logo.png'
import CppLogo from '../assets/c++_logo.png'
import MlxLogo from '../assets/mlx_icon.png'
import type { GameCardProps } from '../data/types'

interface GameModalProps {
  game: GameCardProps
  onClose: () => void
  primaryColor: string
  backgroundColor: string
  borderColor: string
  stackBackgroundColor: string
}

const techIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 className="text-orange-500 text-3xl" />,
  Unity: <FaUnity className="text-white text-3xl" />,
  React: <FaReact className="text-blue-400 text-3xl" />,
  Godot: <SiGodotengine className="text-purple-400 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-3xl" />,
  C: <img src={CLogo} alt="C" className="w-8 h-8" />,
  Cpp: <img src={CppLogo} alt="C++" className="w-8 h-8" />,
  SFML: <img src={SfmlLogo} alt="SFML" className="w-22 h-8" />,
  MLX: <img src={MlxLogo} alt="MLX42" className="w-15 h-9" />
}

const GameModal = ({
  game,
  onClose,
  primaryColor,
  backgroundColor,
  borderColor,
  stackBackgroundColor
}: GameModalProps) => {
  const {
    title,
    releaseDate,
    videoSrc,
    stack,
    description,
    playUrl,
    process,
    learnings,
  } = game

  const scrollRef = useRef<HTMLDivElement>(null)

  // Lock body scroll on modal open, unlock on close
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Prevent scroll bubbling when at modal scroll edges
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const isScrollingUp = e.deltaY < 0
      const isScrollingDown = e.deltaY > 0

      // If trying to scroll past top or bottom, prevent scroll bubbling
      if (
        (isScrollingUp && scrollTop === 0) ||
        (isScrollingDown && scrollTop + clientHeight >= scrollHeight)
      ) {
        e.preventDefault()
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        backgroundColor: stackBackgroundColor,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      <div
        ref={scrollRef}
        className="text-gray-300 bg-gray-900 rounded-xl p-6 max-w-4xl w-full relative shadow-2xl overflow-auto max-h-[90vh] border-2"
        style={{
          borderColor: primaryColor,
        }}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between relative mb-16">
          {/* Tech Stack Box */}
          <div
            className="p-4 rounded-md shadow-sm flex gap-8 justify-center flex-wrap border-2"
            style={{
              borderColor: primaryColor,
              backgroundColor: 'rgba(255,255,255,0.05)'
            }}
          >
            {stack.map((tech) => (
              <div key={tech} className="flex flex-col items-center text-gray-300 text-sm">
                <span className="mb-1 flex justify-center">
                  {techIcons[tech]}
                </span>
              </div>
            ))}
          </div>

          {/* Title & Date */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>
              {title}
            </h2>
            <p className="text-xs bg-gray-700 text-gray-200 rounded-3xl px-2 py-1 mt-1">
              Game finished: {releaseDate}
            </p>
          </div>

          {/* Close Button */}
          <div className="w-[48px] flex justify-end">
            <button
              className="text-gray-300 text-2xl hover:text-red-500 cursor-pointer"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video */}
        <div
          className="w-full mb-6 border-2 rounded-lg overflow-hidden shadow-md"
          style={{ borderColor: primaryColor }}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-h-[500px] object-contain"
          />
        </div>

        {/* Info Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-300">
          <div
            className="bg-gray-800 rounded-lg p-4 md:col-span-2 shadow"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>
              Description
            </h3>
            <p>{description}</p>
          </div>

          <div
            className="bg-gray-800 rounded-lg p-4 md:col-span-2 shadow"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>
              Project Details
            </h3>
            <ul className="list-disc list-inside">
              {process.map((step, idx) => (
                <li key={idx} className="mb-1">{step}</li>
              ))}
            </ul>
          </div>

          <div
            className="bg-gray-800 rounded-lg p-4 md:col-span-2 shadow"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>
              What Did I Learn?
            </h3>
            <ul className="list-disc list-inside">
              {learnings.map((point, idx) => (
                <li key={idx} className="mb-1">{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-4 justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition cursor-pointer"
          >
            Return
          </button>
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md"
            style={{
              backgroundColor: primaryColor,
              color: '#000',
              opacity: 0.95
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#000')}
          >
            Play Game
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameModal
