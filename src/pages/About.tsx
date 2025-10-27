import StoryTimeline from '../components/StoryTimeline'
import { FiExternalLink } from 'react-icons/fi'
import { profileImage2URL } from '../data/assetURLs'

const About = () => {
	const techStack = ['C/C++', 'Godot', 'JavaScript', 'TypeScript', 'React', 'Python']
	const hobbies = ['Game Development & Gaming', 'Football', 'Music']
	const favGames = ['Witcher 3', 'The Last of Us', 'Skyrim', 'Clash Royale']

	const Pills = ({ items }: { items: string[] }) => (
	<div className="flex flex-wrap gap-2">
		{items.map((item) => (
		<span
			key={item}
			className="
			inline-block 
			bg-gray-700 
			text-gray-100 
			px-3 py-1 
			rounded-full 
			text-sm font-medium 
			border border-gray-600
			"
		>
			{item}
		</span>
		))}
	</div>
	)


	return (
		<div className="bg-gray-900 text-white min-h-screen px-6 py-16 max-w-4xl mx-auto">

		{/* Info Card with image on top */}
		<section className="border border-emerald-500 bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center mb-8">
			<img
				src={profileImage2URL}
				alt="Panu Kangas"
				className="w-44 h-44 rounded-xl border-4 border-green-400 object-cover shadow-md mb-6"
				style={{ objectPosition: 'center 28%' }}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Name</h3>
					<p className="text-gray-300 text-base">Panu Kangas</p>
				</div>

				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Location</h3>
					<p className="text-gray-300 text-base">Finland</p>
				</div>

				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Education</h3>
					<p className="text-gray-300 text-base flex items-center gap-2">
					Hive Helsinki
					<a
						href="https://www.hive.fi/en/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-green-400 hover:text-green-300"
						aria-label="Visit Hive Helsinki"
					>
						<FiExternalLink className="inline-block text-lg" />
					</a>
					</p>
				</div>

				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Tech Stack</h3>
					<Pills items={techStack} />
				</div>

				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Hobbies</h3>
					<Pills items={hobbies} />
				</div>

				<div className="bg-gray-700/40 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
					<h3 className="text-green-500 font-semibold text-lg mb-1">Favorite Games</h3>
					<Pills items={favGames} />
				</div>
			</div>
			{/* Contact Info Box */}
			<div className="bg-gray-700/60 border border-gray-600 rounded-lg px-6 py-3 mt-8 w-full max-w-xs">
					<h4 className="text-green-500 font-semibold text-lg mb-1">Contact info</h4>
					<p className="text-gray-300 break-words">kangas.panu@gmail.com</p>
			</div>
			{/* CV Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
				<a
				href="/CV_Panu_Kangas.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1 shadow-md border-3 border-green-700 hover:border-green-300 whitespace-nowrap"
				>
				👀 View CV
				</a>
				<a
				href="/CV_Panu_Kangas.pdf"
				download
				className="bg-green-500 hover:bg-green-400 text-black hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-center flex-1 shadow-md border-3 border-green-700 hover:border-green-300 whitespace-nowrap"
				>
				📄 Download CV
				</a>
			</div>
      </section>
	  	<StoryTimeline />
		</div>
	)
}

export default About
