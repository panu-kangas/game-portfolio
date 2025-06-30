import { Link } from 'react-router-dom';
import profileImage from '../assets/panu-profile.jpg'; // Adjust path
import teaserVideo from '../assets/lab_incident_video.mov'; // Adjust path

const Home = () => (
  <div className="bg-gray-900 text-white min-h-screen px-6 py-16 max-w-7xl mx-auto flex items-center justify-center">
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
          <h1 className="text-5xl font-extrabold text-green-400 mb-4">
            Hello there =)
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            I’m glad you’re here! My name is Panu Kangas, a Finnish game developer passionate about creative technology and immersive game experiences.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Feel free to explore my projects, learn about my work, and see how I turn ideas into engaging games.
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
              className="border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1"
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
