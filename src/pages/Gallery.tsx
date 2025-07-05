import GameCard from '../components/GameCard'
import { games } from '../data/games'

const techStackMeta = {
  C: { label: 'C', color: 'bg-red-600', border: 'border-red-600' },
  Cpp: { label: 'C++', color: 'bg-blue-600', border: 'border-blue-600' },
  Godot: { label: 'Godot', color: 'bg-green-600', border: 'border-green-600' },
  TypeScript: { label: 'TypeScript', color: 'bg-yellow-500', border: 'border-yellow-500' },
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
      <h2 className="text-4xl font-bold mb-6 text-center">Game Gallery</h2>
      <p className="text-m text-green-500 text-center mb-10">
        Click the cards to find more information about the games
      </p>

		{Object.entries(groupedGames).map(([stackKey, games]) => {
		const meta = techStackMeta[stackKey] || { label: stackKey, color: 'bg-gray-700', border: 'border-gray-700' }
		return (
			<section
			key={stackKey}
			className={`
				mb-12 p-6 rounded-2xl border-2 ${meta.border} bg-opacity-20
				bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900
				shadow-lg
			`}
			style={{ backgroundColor: `${meta.color.replace('bg-', '')}20` /* 20 = 12.5% opacity */ }}
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
				<GameCard key={game.slug} {...game} borderClass={`${meta.border}`} />				
			))}
			</div>
			</section>
		)
		})}
    </div>
  )
}

export default Gallery
