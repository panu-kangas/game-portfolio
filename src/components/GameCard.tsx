import { useState } from 'react'
import { FaHtml5, FaUnity, FaReact } from 'react-icons/fa'
import { SiGodotengine, SiTypescript } from 'react-icons/si'
import SfmlLogo from '../assets/sfml_logo.png'
import CLogo from '../assets/c_logo.png'
import CppLogo from '../assets/c++_logo.png'
import MlxLogo from '../assets/mlx_icon.png'
import type { GameCardProps } from '../data/types'
import GameModal from './GameModal'

const techIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 className="text-orange-500 text-4xl" />,
  Unity: <FaUnity className="text-white text-4xl" />,
  React: <FaReact className="text-blue-400 text-4xl" />,
  Godot: <SiGodotengine className="text-purple-400 text-4xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-4xl" />,
  C: <img src={CLogo} alt="C" className="w-9 h-9" />,
  Cpp: <img src={CppLogo} alt="C++" className="w-9 h-9" />,
  SFML: <img src={SfmlLogo} alt="SFML" className="w-25 h-9" />,
  MLX: <img src={MlxLogo} alt="MLX42" className="w-15 h-9" />
}

const GameCard = (props: GameCardProps & { borderClass?: string }) => {
  const {
    title,
    releaseDate,
    previewImg,
    shortDescription,
    bgColor,
    borderClass = 'border-gray-600',
  } = props

  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
		<div
		className={`relative w-64 h-[424px] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer p-4 flex flex-col
			${bgColor}
			${hovered
			? `scale-105 border-4 ${borderClass.replace('border-', 'border-')}`
			: `border-2 ${borderClass}`}
		`}
		onMouseEnter={() => setHovered(true)}
		onMouseLeave={() => setHovered(false)}
		onClick={() => setModalOpen(true)}
		>
			{/* Title + release date */}
			<div className="h-[72px] flex flex-col items-center justify-start gap-1">
			<h3 className="text-2xl font-bold text-white text-center leading-tight line-clamp-2">
				{title}
			</h3>
			<p className="text-xs text-center bg-gray-600 text-white rounded-3xl px-2 py-1 mt-1">
				{releaseDate}
			</p>
			</div>

			{/* Image */}
			<div className="h-40 flex items-center justify-center my-2 border border-gray-500 rounded-md">
			<img
				src={previewImg}
				alt={title}
				className="w-full h-full object-cover rounded"
			/>
			</div>

			{/* Description */}
			<div className="flex-1 flex items-center justify-center">
			<p className="text-[0.9375rem] text-gray-200 text-center px-2">
				{shortDescription}
			</p>
			</div>
      </div>

      {modalOpen && (
        <GameModal game={props} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default GameCard
