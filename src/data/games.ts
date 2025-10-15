import { videoURLs, imageURLs } from '../data/assetURLs'

let commonBgColor = 'bg-gray-800'

export const games = [
{
	title: 'The Lab Incident',
	releaseDate: '01/2025',
	previewImg: imageURLs.labIncident,
	videoSrc: videoURLs.labIncident,
	stack: ['Godot'],
	label: 'Godot',
	bgColor: commonBgColor,
	shortDescription: 'Survive a lab project gone wrong! Trap foes in bubbles and send them back through a portal before they run you over.',
	description:
	'The Lab Incident is a chaotic 2D action game created in just 48 hours for the Finnish Game Jam 2025. \
	You play as a scientist whose experiment has gone horribly, dimensionally wrong — a portal has opened, and monsters are pouring in! \
	Armed with a just a bubble gun (weird, right?), you must trap the creatures and launch them back through the portal before they escape the lab. \
	It’s fast, frantic, and full of science-gone-wrong energy. Good luck… you’re the cleanup crew now.',
	process: [
		'Developed using the Godot game engine',
		'Collaborated as part of a 4-person development team',
		'Key features: bubble-based enemy capture, portal mechanic & enemy spawning, platform navigation logic',
		'My main tasks included implementing core gameplay logic, collision detection, and the win/lose conditions',
		'Developed in just 48 hours for the Finnish Game Jam 2025',
		'First time working with Godot AND my first ever game jam — there was a lot to learn, fast!'
	],
	learnings: [
		'Gained hands-on experience with the Godot game engine',
		'Improved teamwork and communication under tight time constraints',
		'Learned to prioritize features and stay focused during intense development sprints',
		'Practiced rapid ideation and prototyping',
		'Learned the fundamentals of releasing and publishing a game online'
	],
	codeUrl: 'https://github.com/KrolPolski/Finnish-Game-Jam-2025',
	playUrl: 'https://rlboudwin.itch.io/the-lab-incident',
	slug: 'the-lab-incident',
	isPlayableOnline: true
},
{
	title: 'Gravity Changer',
	releaseDate: '11/2024',
	previewImg: imageURLs.gravityChanger,
	videoSrc: videoURLs.gravityChanger,
	stack: ['Cpp', 'SFML'],
	label: 'C++',
	bgColor: commonBgColor,
	shortDescription: 'Bend gravity to your will in this fast-paced platformer where you flip directions to grab points, beat the clock, and defy physics.',
	description:
		'Gravity Changer is a fast-paced platformer where you control a brave green rectangle on a quest for red-point glory. \
		The goal? Snatch up as many points as you can before the timer hits zero — and yes, every point buys you a little more time. \
		The twist? You can shift gravity in any direction, pulling yourself toward walls, ceilings, and other hard-to-reach places. \
		Think fast, shift smart, and bend the rules of gravity before the clock runs out!',
	process: [
		'Developed using C++ and the SFML library',
		'Solo project created during my free time',
		'Key features: gravity shift mechanic, point and timer system, direction-aware collision handling',
		'Completed over the course of 2 weeks'
	],
	learnings: [
		'Improved my C++ skills, with a focus on scalable game architecture and clean, readable code',
		'Learned firsthand the challenges of collision detection and resolution — it’s trickier than it looks!',
		'Gained a better sense of game balance, especially around speed, points, and timer tuning'
	],
	codeUrl: 'https://github.com/panu-kangas/Gravity_changer',
	playUrl: '',
	slug: 'gravity-changer',
	isPlayableOnline: false
},
{
	title: 'Snake Adventures',
	releaseDate: '10/2024',
	previewImg: imageURLs.snakeAdventures,
	videoSrc: videoURLs.snakeAdventures,
	stack: ['Cpp', 'SFML'],
	label: 'C++',
	bgColor: commonBgColor,
	shortDescription: 'Dodge tower fire and gobble apples in an action-packed Snake-inspired game.',
	description:
		'Snake Adventures is a fast-paced, snake-style game where you slither around collecting all the apples on the map. \
		Keep your eyes peeled though — towers are ready to shoot arrows your way at the slightest mistake! \
		Luckily, our speedy Snake comes equipped with a Power Boost that lets him zoom ahead for short bursts of time. \
		Think you can outsmart the towers and finish your fruity feast without getting pierced? Better stay sharp and keep moving!',
	process: [
		'Developed using C++ and the SFML library',
		'Solo project created during my free time',
		'Key features: Snake movement, apple collection system, tower AI and arrow tracking, Power Boost ability',
		'Completed over the course of approximately 4 weeks',
		'First project with this tech stack'
	],
	learnings: [
		'Learned the fundamentals of SFML and how to apply it to game development',
		'Improved my understanding of C++ containers, object-oriented programming, and class structuring',
		'Gained new insights into game UX, like balancing movement speed for a satisfying feel',
		'Learned practical memory and resource handling — like rendering only what’s visible and cleaning up off-screen arrows'
	],
	codeUrl: 'https://github.com/panu-kangas/Snake_SFML',
	playUrl: '',
	slug: 'snake_adventures',
	isPlayableOnline: false
},
{
	title: 'Maze Shooter',
	releaseDate: '08/2024',
	previewImg: imageURLs.mazeShooter,
	videoSrc: videoURLs.mazeShooter,
	stack: ['C', 'MLX'],
	label: 'C',
	bgColor: commonBgColor,
	shortDescription: 'Blast your way through a monster-filled maze in this Wolfenstein-inspired 3D shooter.',
	description:
		'Maze Shooter is a retro-style first-person shooter that throws you into a twisted labyrinth crawling with floating monsters and lurking danger. \
		Armed with a powerful blaster, a handy minimap, and your wits, your mission is clear: survive the threats and find the hidden exit to escape the maze. \
		Inspired by the legendary Wolfenstein 3D, the game combines classic raycasting visuals and intense combat with strategic exploration and spatial awareness.',
	process: [
		'Developed in C using the MLX42 graphics library',
		'2-developer project completed during my studies at Hive Helsinki',
		'Key features: 3D-style maze navigation, intelligent monsters, shooting mechanics, and dynamic minimap',
		'My main tasks included implementing the raycasting algo, enemy AI, and the minimap',
		'Spent approximately 3 weeks on development',
		'My first 3D game project'
	],
	learnings: [
		'Learned the fundamentals of raycasting and how classic 3D rendering works in a 2D engine',
		'Deepened my understanding of enemy design through patrol, detection, and chasing behaviors',
		'Designed and implemented a dynamic minimap that updates based on the maze layout',
	],
	codeUrl: 'https://github.com/panu-kangas/Cub3d',
	playUrl: '',
	slug: 'maze_shooter',
	isPlayableOnline: false
},
{
	title: 'Diamond Hunt',
	releaseDate: '04/2024',
	previewImg: imageURLs.diamondHunt,
	videoSrc: videoURLs.diamondHunt,
	stack: ['C', 'MLX'],
	label: 'C',
	bgColor: commonBgColor,
	shortDescription: 'Play as a hammer-swinging king on a quest to reclaim his lost diamonds while battling mischievous pigs in a 2D adventure.',
	description:
		'Diamond Hunt is a retro-style 2D puzzle adventure game where you guide a determined king through a maze to recover his stolen diamonds. \
		But beware — cunning evil pigs guard the treasure! \
		Thankfully, the King’s trusty Hammer is by his side, ready to smash any trouble that comes his way. \
		Oh, and heads up — once you’ve collected all the diamonds, there’s a nasty little surprise waiting on your way back... so count your steps when you head for the exit!',
	process: [
		'Developed in C using the MLX42 graphics library',
		'Solo project completed during my studies at Hive Helsinki',
		'Key features: image and event handling, map processing, enemy AI, level design',
		'Spent approximately 5 weeks on development',
		'My very first game ever!'
	],
	learnings: [
		'Mastered the basics of image rendering, sprite animation, and core gameplay logic',
		'Got my first taste of algorithms by implementing enemy movement and a "shortest route" pathfinder',
		'Gained hands-on experience managing memory in larger C programs',
		'Ignited a lasting passion for game development'
	],
	codeUrl: 'https://github.com/panu-kangas/so_long',
	playUrl: '',
	slug: 'diamond_hunt',
	isPlayableOnline: false
}
]

