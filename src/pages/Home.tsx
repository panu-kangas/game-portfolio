import { useState } from 'react'
import { Link } from 'react-router-dom';
import { profileImage1URL, videoURLs } from '../data/assetURLs'

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-16 max-w-8xl mx-auto flex items-center justify-center">
      {/* Single Combined Box */}
      <section className="border border-emerald-500 rounded-xl p-12 bg-gray-800 shadow-xl w-full max-w-5xl">
        
        {/* Top row: photo + intro text + CTAs */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <img
            src={profileImage1URL}
            alt="Panu Kangas"
            className="w-48 h-48 rounded-full border-4 border-green-400 shadow-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-green-500 mb-5 text-center">
              Welcome!
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Hello there 😊  
            </p>
            <p className="text-xl text-gray-300 mb-4">     
				My name is Panu — I'm a Finnish game developer with an unusual background in musical theatre.
			</p>

			<p className="text-xl text-gray-300 mb-4">     
				After performing in musicals for over 10 years, I discovered coding in 2023. Since then, 
				I’ve been passionate about combining creative thinking with technical skills — something that truly comes alive in game development.
            </p>

			<p className="text-xl text-gray-300 mb-4">     
				So, this site is dedicated to my journey into game dev. Yay! 🥳
            </p>

            <p className="text-xl text-gray-400 mb-7 mt-10">
              Feel free to explore the site and check out some of the projects I’ve been working on — I hope you find something that inspires you!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
				<Link
					to="/gallery"
					className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1 shadow-md border-3 border-green-700 hover:border-green-300 whitespace-nowrap"
				>
					🎮 View My Games
				</Link>
			<>
				<a
				href="/CV_Panu_Kangas.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1 shadow-md border-3 border-green-700 hover:border-green-300 whitespace-nowrap"
				>
				👀 View CV
				</a>
			</>
			<>
				<Link
					to="/about"
					className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1 shadow-md border-3 border-green-700 hover:border-green-300 whitespace-nowrap"
				>
					🙋‍♂️ More About Me
				</Link>
			</>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 my-8 border-2 rounded-lg" />

        {/* Video below the intro section */}
		<div className="relative rounded-lg overflow-hidden border-2 border-emerald-500 shadow-md">
			{/* Loading placeholder */}
			{!isVideoLoaded && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse z-10">
					<span className="text-gray-400 text-lg">Loading video...</span>
				</div>
			)}

			{/* Aspect-ratio wrapper */}
			<div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
				<iframe
				src={videoURLs.teaser}
				className="absolute top-0 left-0 w-full h-full"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				onLoad={() => setIsVideoLoaded(true)}
				title="Landing Page Teaser"
				loading="lazy"
				/>
			</div>
		</div>

      </section>
    </div>
  );
};

export default Home;
