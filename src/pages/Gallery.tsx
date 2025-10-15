import GameCard from '../components/GameCard'
import { games } from '../data/games'

const Gallery = () => {
  return (
    <div className="text-white max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-2 text-center text-green-500">Game Gallery</h2>
      <p className="text-m text-center mb-10">
        Click the cards to find more information about the games
      </p>

      {/* Wrapper div styled like previous stack sections */}
      <section
        className="mb-12 p-6 rounded-2xl border-2 border-emerald-500 shadow-lg"
        style={{ backgroundColor: 'rgba(16, 185, 129, 0.06)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center overflow-visible">
          {games.map((game) => (
            <GameCard
              key={game.slug}
              {...game}
              borderClass="border-emerald-500"
              primaryColor="#10b981"
              borderColor="#10b981"
              backgroundColor="rgba(16, 185, 129, 0.05)"
              stackBackgroundColor="rgba(16, 185, 129, 0.05)"
              stackLabel={game.label}
			  stackName={game.stack[0]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Gallery
