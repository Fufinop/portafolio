type Route = {
	title: string;
	path: string;
};

type FooterCol = {
	title: string;
	links: {
		name: string;
		link: string;
		icon?: string;
		leavesWebsite: boolean;
	}[];
};

type Footer = {
	columns: FooterCol[];
	support: {
		buymeacoffee: string;
		paypal: string;
		message: string;
	};
};

export const routes: Route[] = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Projects',
		path: '/projects',
	},
	{
		title: 'Designs',
		path: '/designs',
	},
];

export const footer: Footer = {
	columns: [
		{
			title: 'Pages',
			links: [
				{
					name: 'Home',
					link: '/',
					leavesWebsite: false,
				},
				{
					name: 'Projects',
					link: '/projects',
					leavesWebsite: false,
				},
				{
					name: 'Designs',
					link: '/designs',
					leavesWebsite: false,
				},
			],
		},
		{
			title: 'Social',
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/Fufinop',
					icon: '/static/icons/github-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/in/ernesto-de-la-rosa-zamora-636a28259/',
					icon: '/static/icons/linkedin-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'Email',
					link: 'mailto:ernestodelazamora@gmail.com',
					icon: '/static/icons/mail-f.svg',
					leavesWebsite: true,
				},
			],
		},
	],
	support: {
		buymeacoffee: 'w',
		paypal: 'tw',
		message: 'I appreciate your support very much! 💙',
	},
};
