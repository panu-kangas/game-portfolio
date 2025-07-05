import { Link } from 'react-router-dom';
import profileImage from '../assets/panu-profile.jpg'; // Adjust path
import teaserVideo from '../assets/lab_incident_video.mov'; // Adjust path

const Home = () => (
  <div className="bg-gray-900 text-white min-h-screen px-6 py-16 max-w-8xl mx-auto flex items-center justify-center">
    {/* Single Combined Box */}
    <section className="border border-emerald-500 rounded-xl p-12 bg-gray-800 shadow-xl w-full max-w-5xl">
      
      {/* Top row: photo + intro text + CTAs */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
        <img
          src={profileImage}
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
				My name is <strong className="text-green-500">Panu</strong>, a Finnish game developer with a passion for building creative and versatile games — always with fun at the heart of the experience.
			</p>
			<p className="text-xl text-gray-300 mb-4">
				I enjoy every part of game development: from crafting the big-picture vision and designing gameplay mechanics, to writing stories, fine-tuning UI, and solving technical challenges.
			</p>
			<p className="text-xl text-gray-300 mb-4">
				My strengths lie in <span className="text-green-500 font-semibold">creative thinking</span> and <span className="text-green-500 font-semibold">strong coding skills</span>.  <br/>
				I’m also highly organized and a <span className="text-green-500 font-semibold">reliable team player</span> who enjoys collaborating to bring ideas to life.
			</p>

			<p className="text-xl text-gray-400 mb-7 mt-10">
				Feel free to explore the site and check out some of the projects I’ve been working on — I hope you find something that inspires you!
			</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Link
              to="/gallery"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1"
            >
              🎮 View My Games
            </Link>
            <a
              href="/PanuKangas_CV.pdf"
              download
              className="border border-green-400 hover:border-green-300 text-green-600 hover:text-green-300 font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>

	  <hr className="border-gray-500 my-8 border-2 rounded-lg" />

	{/* <p className="mb-6 text-xl text-center text-emerald-400 font-semibold uppercase tracking-wide select-none">
			Teaser 2025
		</p> */} 

      {/* Video below the intro section */}
      <div className="rounded-lg overflow-hidden border-2 border-emerald-500 shadow-md">
        <video
          src={teaserVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[450px] object-cover rounded-md"
        />
      </div>
    </section>
  </div>
);

export default Home;
