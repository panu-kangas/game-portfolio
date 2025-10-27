import { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaUnity, FaReact } from 'react-icons/fa'
import { SiGodotengine, SiTypescript } from 'react-icons/si'
import { iconURLs } from '../data/assetURLs'
import type { GameCardProps } from '../data/types'

interface GameModalProps {
  game: GameCardProps
  onClose: () => void
  primaryColor: string
  backgroundColor: string
  borderColor: string
  stackBackgroundColor: string
}

const techIcons: Record<string, React.JSX.Element> = {
  HTML5: <FaHtml5 className="text-orange-500 text-3xl" />,
  Unity: <FaUnity className="text-white text-3xl" />,
  React: <FaReact className="text-blue-400 text-3xl" />,
  Godot: <SiGodotengine className="text-purple-400 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-3xl" />,
  C: <img src={iconURLs.c} alt="C" className="w-8 h-8" />,
  Cpp: <img src={iconURLs.cpp} alt="C++" className="w-8 h-8" />,
  SFML: <img src={iconURLs.sfml} alt="SFML" className="w-20 h-6" />,
  MLX: <img src={iconURLs.mlx} alt="MLX42" className="w-13 h-7" />
}

const GameModal = ({
  game,
  onClose,
  primaryColor,
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
	isPlayableOnline
  } = game

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

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
			className="p-4 rounded-md shadow-sm flex flex-col gap-4 items-center border-2"
			style={{
				borderColor: primaryColor,
				backgroundColor: 'rgba(255,255,255,0.05)'
			}}
		>

			<div key={stack[0]} className="flex flex-col items-center text-gray-300 text-sm">
			<span className="flex justify-center">
				{techIcons[stack[0]]}
			</span>
			</div>
		</div>


          {/* Title & Date */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center mb-2">
            <h2 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
              {title}
            </h2>
            <span className="text-[0.9rem] text-emerald-300 bg-emerald-800 px-2 py-[2px] rounded-full mt-1">
              Developed: {releaseDate}
            </span>
          </div>

          {/* Close Button */}
          <div className="w-[48px] flex justify-end">
            <button
              className="text-gray-300 text-2xl hover:text-red-500 cursor-pointer z-20"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video */}
<div
  className="relative w-full mb-6 border-2 rounded-lg overflow-hidden shadow-md"
  style={{ borderColor: primaryColor }}
>
  <div className="relative w-full pt-[56.25%] bg-black">
    {/* Loading placeholder */}
    {!isVideoLoaded && (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-10">
        <span className="text-gray-400">Loading video...</span>
      </div>
    )}

    {/* YouTube iframe */}
    <iframe
      src={videoSrc}
      className="absolute top-0 left-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onLoad={() => setIsVideoLoaded(true)}
      title="Game Clip"
      loading="lazy"
    />
  </div>
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
          	{isPlayableOnline ? (
				<>
					<a
						href={game.codeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-md"
						style={{
							backgroundColor: primaryColor,
							color: '#000',
							opacity: 0.95,
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
						onMouseLeave={(e) => (e.currentTarget.style.color = '#000')}
					>
					View code in GitHub
					</a>

					<a
						href={playUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-md"
						style={{
							backgroundColor: primaryColor,
							color: '#000',
							opacity: 0.95,
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
						onMouseLeave={(e) => (e.currentTarget.style.color = '#000')}
					>
					Play online in itch.io
					</a>
				</>
				) : (
					<a
						href={game.codeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-md"
						style={{
						backgroundColor: primaryColor,
						color: '#000',
						opacity: 0.95,
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
						onMouseLeave={(e) => (e.currentTarget.style.color = '#000')}
					>
					View code & download game in GitHub
					</a>
				)}
        </div>
      </div>
    </div>
  )
}

export default GameModal
