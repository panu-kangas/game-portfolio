import labIncidentImg from '../assets/lab_incident_screenshot.png'
import labIncidentVideo from '../assets/lab_incident_video.mov'
import diamondHuntImg from '../assets/diamond_hunt_image.png'
import diamondHuntVideo from '../assets/diamond_hunt_video.mov'
import gravityChangerImg from '../assets/gravity_changer_img.png'
import gravityChangerVideo from '../assets/gravity_changer_video.mov'
import snakeAdventuresImg from '../assets/snake_adventures.png'
import snakeAdventuresVideo from '../assets/snake_adventures_video.mov'


let commonBgColor = 'bg-gray-800'

export const games = [
  {
	title: 'The Lab Incident',
	releaseDate: '01/2025',
	previewImg: labIncidentImg,
	videoSrc: labIncidentVideo,
	stack: ['Godot'],
	bgColor: commonBgColor,
	shortDescription: 'Fast-paced platformer where you repel monsters back into a portal.',
	description:
		'The Lab Incident is a fast-paced 2D platformer created during the Finnish Game Jam 2025. You play as a lone scientist trying to repel waves of otherworldly monsters back into a dimensional portal before they overrun the facility. With tight movement mechanics, escalating intensity, and a minimalist retro aesthetic, the game offers a short but intense arcade experience developed in just 48 hours.',
	process: [
		'Developed in 48 hours during Finnish Game Jam 2025',
		'Collaborated as part of a 4-person development team',
		'Focused on implementing core gameplay logic, collision detection, and win/lose conditions'
	],
	learnings: [
		'Gained hands-on experience with the Godot game engine',
		'Improved collaboration under strict time constraints',
		'Practiced rapid ideation and prototyping in a jam setting'
	],
	playUrl: 'https://github.com/KrolPolski/Finnish-Game-Jam-2025',
	slug: 'the-lab-incident',
	},
  {
	title: 'Gravity Changer',
	releaseDate: '11/2024',
	previewImg: gravityChangerImg,
	videoSrc: gravityChangerVideo,
	stack: ['Cpp', 'SFML'],
	bgColor: commonBgColor,
	shortDescription: 'Fast-paced platformer where you repel monsters back into a portal.',
	description:
		'Gravity Changer is a 2D platformer built with C++ and SFML, featuring a unique gravity-shifting mechanic. The player can invert gravity at will, navigating complex levels that challenge spatial awareness and timing. This solo project was developed over two weeks and focuses on responsive movement, smooth transitions between gravity states, and dynamic level design.',
	process: [
		'Developed as a solo side project over two weeks',
		'Handled all aspects of design, coding, and testing independently'
	],
	learnings: [
		'Implemented gravity inversion logic and physics handling',
		'Built custom collision detection with directional awareness',
		'Improved C++ skills, focusing on scalable game architecture and code readability'
	],
	playUrl: 'https://github.com/panu-kangas/Gravity_changer',
	slug: 'gravity-changer',
	},
  {
	title: 'Snake Adventures',
	releaseDate: '10/2024',
	previewImg: snakeAdventuresImg,
	videoSrc: snakeAdventuresVideo,
	stack: ['Cpp', 'SFML'],
	bgColor: commonBgColor,
	shortDescription: 'Fast-paced platformer where you repel monsters back into a portal.',
	description:
		'Snake Adventures is a modern take on the classic snake game, built with C++ and the SFML library. While it retains the core mechanics of traditional snake gameplay, it introduces a small twist that adds variety and challenge. As a beginner-friendly solo project, this game helped lay the foundation for more complex game development work.',
	process: [
		'Developed using C++ and the SFML library',
		'First project with this technology stack',
		'Solo project created during my free time',
		'Completed over the course of approximately 4 weeks'
	],
	learnings: [
		'Learned the fundamentals of SFML and how to apply it in game development',
		'Improved understanding of C++ containers, object-oriented programming, and class structuring'
	],
	playUrl: 'https://github.com/panu-kangas/Snake_SFML',
	slug: 'snake_adventures',
	},
  {
	title: 'Diamond Hunt',
	releaseDate: '04/2024',
	previewImg: diamondHuntImg,
	videoSrc: diamondHuntVideo,
	stack: ['C', 'MLX'],
	bgColor: commonBgColor,
	shortDescription: 'Fast-paced platformer where you repel monsters back into a portal.',
	description:
		'Diamond Hunt is a retro-style 2D puzzle adventure game where you guide a determined king through a maze of hazards to recover his stolen diamonds. But beware — cunning evil pigs guard the treasure! Built entirely in C using the MLX42 graphics library, this game blends simple mechanics with hand-crafted sprite-based visuals and real-time keyboard input.',
	process: [
		'Developed using C and the MLX42 graphics library',
		'Solo project completed as part of my studies at Hive Helsinki',
		'Spent approximately 5 weeks building the game from scratch'
	],
	learnings: [
		'Learned the fundamentals of image rendering, sprite animation, and core gameplay logic',
		'Gained experience managing memory in larger C programs',
		'Sparked my long-term interest in game development — my very first completed game project'
	],
	playUrl: 'https://github.com/panu-kangas/so_long',
	slug: 'diamond_hunt',
	},
]

