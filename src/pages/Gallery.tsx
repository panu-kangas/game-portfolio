import GameCard from '../components/GameCard'
import { games } from '../data/games'

const techStackMeta = {
  Godot: { label: 'Godot', color: 'bg-[#3b82f6]', border: 'border-[#3b82f6]', bg: 'rgba(59, 130, 246, 0.06)'},
  C: { label: 'C', color: 'bg-[#4682b4]', border: 'border-[#4682b4]', bg: 'rgba(70, 130, 180, 0.06)' },
  Cpp: { label: 'C++', color: 'bg-[#6366f1]', border: 'border-[#6366f1]', bg: 'rgba(99, 102, 241, 0.06)' },
  TypeScript: { label: 'TypeScript', color: 'bg-[#38bdf8]', border: 'border-[#38bdf8]', bg: 'rgba(56, 189, 248, 0.06)'}
}

const Gallery = () => {
  // Group games by primary stack (first stack)
  const groupedGames = games.reduce((acc, game) => {
    const primaryStack = game.stack[0]
    if (!acc[primaryStack]) acc[primaryStack] = []
    acc[primaryStack].push(game)
    return acc
  }, {} as Record<string, typeof games>)

  return (
    <div className="text-white max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-2 text-center">Game Gallery</h2>
      <p className="text-m text-green-500 text-center mb-10">
        Click the cards to find more information about the games
      </p>

		{Object.entries(groupedGames).map(([stackKey, games]) => {
		const meta = techStackMeta[stackKey] || { label: stackKey, color: 'bg-gray-700', border: 'border-gray-700' }
		return (
			<section
				key={stackKey}
				className={`
					mb-12 p-6 rounded-2xl border-2 ${meta.border}
					shadow-lg
				`}
				style={{ backgroundColor: meta.bg }}
				>
				<h3
					className={`
					inline-block px-5 py-2 rounded-full font-semibold text-white
					${meta.color} shadow-md shadow-${meta.color.replace('bg-', '')}/70
					`}
				>
					{meta.label}
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center overflow-visible mt-6">
					{games.map((game) => (
						<GameCard
							key={game.slug}
							{...game}
							borderClass={meta.border}
							primaryColor={meta.color.replace('bg-[', '').replace(']', '')}
							borderColor={meta.border.replace('border-[', '').replace(']', '')}
							backgroundColor={meta.bg}
							stackBackgroundColor={meta.bg}
						/>
					))}
				</div>
			</section>
		)
		})}
    </div>
  )
}

export default Gallery
