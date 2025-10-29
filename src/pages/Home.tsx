import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profileImage1URL, videoURLs } from '../data/assetURLs'

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-16 flex items-center justify-center">
      <section className="border border-emerald-500 rounded-xl p-8 md:p-12 bg-gray-800 shadow-xl w-full max-w-5xl flex flex-col items-center text-center">
        
        {/* --- HEADER --- */}
        <h1 className="text-5xl font-extrabold text-green-500 mb-3">
          Panu Kangas
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          Blending creativity and code to build something fun
        </h2>

        {/* --- VIDEO --- */}
        <div className="relative w-full rounded-lg overflow-hidden border-2 border-emerald-500 shadow-md mb-10">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-10">
              <span className="text-gray-400 text-lg">Loading video...</span>
            </div>
          )}
		<div className="relative -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full pb-[56.25%]">
            <iframe
              src={videoURLs.teaser}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
              title="Portfolio Teaser"
              loading="lazy"
            />
          </div>
        </div>

        {/* --- CTA BUTTONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/gallery"
            className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md border-2 border-green-700 hover:border-green-300 whitespace-nowrap"
          >
            🎮 View My Games
          </Link>

          <a
            href="/CV_Panu_Kangas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md border-2 border-green-700 hover:border-green-300 whitespace-nowrap"
          >
            👀 Check Out CV
          </a>

          <Link
            to="/about"
            className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md border-2 border-green-700 hover:border-green-300 whitespace-nowrap"
          >
            🙋‍♂️ More About Me
          </Link>
        </div>

        {/* --- INTRO TEXT --- */}
        <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12 space-y-4">
          	<p>
			My name is Panu, I'm a game developer <span className="text-green-400 font-semibold">specialized in C++</span> with a strong technical foundation. 
			Beyond code, I bring <span className="text-green-400 font-semibold">creativity and leadership</span> to the table, shaped by a unique 10-year background in musical theatre and six years managing my own theatre ensemble.
			I'm very <span className="text-green-400 font-semibold">passionate about game development</span> and eager to take on versatile roles across the industry.
			</p>
        </div>

        {/* --- PROFILE IMAGE --- */}
        <img
          src={profileImage1URL}
          alt="Panu Kangas"
          className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg object-cover"
        />
      </section>
    </div>
  )
}

export default Home
