import GameCard from '../components/GameCard'
import { games } from '../data/games'

const Gallery = () => {
  return (
    <div className="text-white max-w-4xl mx-auto p-6">
		<h2 className="text-4xl font-bold mb-2 text-center">Game Gallery</h2>
		<p className="text-m text-green-500 text-center mb-7">
				Click the cards to find more information about the games
		</p>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center overflow-visible">
			{games.map((game) => (
				<GameCard key={game.slug} {...game} />
			))}
		</div>
    </div>
  )
}

export default Gallery