type Skill = {
	title: string;
	icon: string;
	style?: object;
};
type Testimonial = {
	quote: string;
	name: string;
	job: string;
};

export const skills: Skill[] = [
	{
		title: 'HTML',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	},
	{
		title: 'CSS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
	},
	{
		title: 'Javascript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	},
	{
		title: 'TailwindCSS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
	},
	{
		title: 'React',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	},
	{
		title: 'NextJS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
		style: { filter: 'invert(1)' },
	},
	{
		title: 'NodeJS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	},
	{
		title: 'Git',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
	},
	{
		title: 'Npm',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
	},
	{
		title: 'Express',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
	},
	{
		title: 'MySQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg',
	},
	{
		title: 'Docker',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg',
	},
];

export const testimonials: Testimonial[] = [
	{
		quote: '',
		name: 'Ethan Karp',
		job: 'Example of a client',
	},
	{
		quote: '',
		name: 'Joshua Markowitz',
		job: 'Example of a client',
	},
	{
		quote: '',
		name: 'Omega code',
		job: 'Example of a client',
	},
];
