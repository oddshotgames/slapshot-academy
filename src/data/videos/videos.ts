import tags from './video-tags';

type Video = {
	title: string;
	author: string;
	source: string;
	duration: number; // in seconds
	tags: string[];
};

const videos = [
	{
		title: 'Getting Started, Settings and Beginner Practice',
		author: 'Walster',
		source: 'https://youtu.be/PwRi7u_1e40',
		duration: 687,
		tags: [tags.BEGINNER, tags.OVERVIEW],
	},
	{
		title: 'Beginner Mistakes',
		author: 'NightSector',
		source: 'https://youtu.be/fe__b1EsOHw',
		duration: 367,
		tags: [tags.BEGINNER],
	},
	{
		title: 'Advanced Puck Control',
		author: 'NightSector',
		source: 'https://youtu.be/CxKvwEbY3u0',
		duration: 451,
		tags: [tags.ADVANCED],
	},
	{
		title: 'Slapshot: Rebound for Beginners',
		author: 'MojosLive',
		source: 'https://youtu.be/grYp5NekYbM',
		duration: 461,
		tags: [tags.BEGINNER, tags.OVERVIEW],
	},
	{
		title: 'How to deke',
		author: 'You Know Who',
		source: 'https://youtu.be/vy2gAiZcjA0',
		duration: 472,
		tags: [tags.ADVANCED],
	},
	{
		title: 'Controller Binds & Camera Settings',
		author: 'LaffTrakk',
		source: 'https://youtu.be/9UxI36e8688',
		duration: 494,
		tags: [tags.BEGINNER],
	},
	{
		title: 'Positioning',
		author: 'LaffTrakk',
		source: 'https://youtu.be/Cf4Sc5QKS7A',
		duration: 568,
		tags: [tags.ADVANCED],
	},
	{
		title: 'Slapshot: Rebound Beginners Guide',
		author: 'Re1gn',
		source: 'https://youtu.be/TtBMxEN5Hks',
		duration: 435,
		tags: [tags.BEGINNER, tags.OVERVIEW],

	}
] as Video[];

export type { Video };
export default videos;