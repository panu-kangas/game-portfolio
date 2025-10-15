import { useState } from 'react'
import { FaHtml5, FaUnity, FaReact } from 'react-icons/fa'
import { SiGodotengine, SiTypescript } from 'react-icons/si'
import { iconURLs } from '../data/assetURLs'
import type { GameCardProps } from '../data/types'
import GameModal from './GameModal'

const techIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 className="text-orange-500 text-4xl" />,
  Unity: <FaUnity className="text-white text-4xl" />,
  React: <FaReact className="text-blue-400 text-4xl" />,
  Godot: <SiGodotengine className="text-purple-400 text-4xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-4xl" />,
  C: <img src={iconURLs.c} alt="C" className="w-9 h-9" />,
  Cpp: <img src={iconURLs.cpp} alt="C++" className="w-9 h-9" />,
  SFML: <img src={iconURLs.sfml} alt="SFML" className="w-25 h-9" />,
  MLX: <img src={iconURLs.mlx} alt="MLX42" className="w-15 h-9" />
}

const GameCard = (props: GameCardProps & {
  borderClass?: string,
  primaryColor?: string,
  borderColor?: string,
  backgroundColor?: string,
  stackBackgroundColor?: string,
  stackLabel?: string,
  stackName?: string
}) => {

  // color map
  const techStackMeta: Record<string, { label: string; color: string; bg: string }> = {
  Godot: { label: 'Godot', color: 'text-purple-300', bg: 'bg-purple-900/90' },
  C: { label: 'C', color: 'text-blue-300', bg: 'bg-blue-900/90' },
  Cpp: { label: 'C++', color: 'text-indigo-300', bg: 'bg-indigo-900/90' },
  TypeScript: { label: 'TypeScript', color: 'text-sky-400', bg: 'bg-sky-900/90' },
}


  const {
    title,
    releaseDate,
    previewImg,
    shortDescription,
    bgColor,
    borderClass = 'border-gray-600',
    stackLabel,
	stackName
  } = props

  const stackMeta = stackName ? techStackMeta[stackName] : undefined

  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div
        className={`relative w-64 h-[440px] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer p-4 flex flex-col
          ${bgColor}
          ${hovered
            ? `scale-105 border-4 ${borderClass.replace('border-', 'border-')}`
            : `border-2 ${borderClass}`}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Title + release date + stack */}
        <div className="h-[86px] flex flex-col items-center justify-start gap-1">
          <h3
            className="text-2xl font-bold text-white text-center leading-tight line-clamp-2"
            style={{ color: props.primaryColor }}
          >
            {title}
          </h3>

          {releaseDate && (
            <span className="text-[0.7rem] text-emerald-300 bg-emerald-800 px-2 py-[2px] rounded-full mt-1">
              {releaseDate}
            </span>
          )}

          {/* Stack Label with dynamic color */}
          {stackLabel && (
			<span
				className={`
				${stackMeta?.color ?? 'text-emerald-300'} 
				${stackMeta?.bg ?? 'bg-emerald-900/70'} 
				px-2 py-[3px] rounded-full mt-2 text-xs font-medium
				shadow-sm
				select-none
				inline-block
				`}
				style={{ lineHeight: 1.1 }}
			>
				Built with {stackLabel}
			</span>
			)}

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

      {/* Modal */}
      {modalOpen && (
        <GameModal
          game={props}
          onClose={() => setModalOpen(false)}
          primaryColor={props.primaryColor || '#10B981'}
          borderColor={props.borderColor || '#444'}
          backgroundColor={props.backgroundColor || '#1F2937'}
          stackBackgroundColor={props.stackBackgroundColor || '#111'}
        />
      )}
    </>
  )
}


export default GameCard

