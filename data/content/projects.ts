import { kebabCase } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		id: 0,
		title: 'El asador de Richard',
		desc: 'This Github repository hosts a webapp for a grill restaurant. The app allows customers to order online and customize their dishes with different choices of meats, sides and sauces.',
		img: '/static/projects/elasadorderichard.png',
		width: 500,
		height: 400,
		link: 'https://www.elasadorderichard.live/',
		github: 'https://github.com/ICCOCUT/ecommerce-Asador-de-Richard',
		tags: ['React', 'NextJS', 'TailwindCSS', 'Prisma', 'MySQL'],
	},
	{
		id: 1,
		title: 'Encriptador de texto',
		desc: 'JavaScript Text Encryptor: Protect messages with this text encryptor.',
		img: '/static/projects/encriptadordetexto.png',
		width: 500,
		height: 400,
		link: 'https://encriptador-de-texto-two.vercel.app/',
		github: 'https://github.com/Fufinop/Encriptador-de-Texto',
		tags: ['Vite', 'html', 'css', 'javascript'],
	},
	{
		id: 2,
		title: 'Proyecto Algoritmia',
		desc: 'Implementation of several sorting algorithms in Java with an interactive graphical interface to visualize the sorting process. An educational project to learn and explore sorting algorithms in Java.',
		img: '/static/projects/proyectoalgoritmia.png',
		width: 500,
		height: 400,
		link: '',
		github: 'https://github.com/ICCOCUT/ProyectoFinalAlgoritmia',
		tags: ['Java', 'Maven', 'Algorithms'],
	},
];

export const allTags = [];

projects.forEach(project => {
	project.tags.forEach(
		(tag: any) => !allTags.includes(tag) && allTags.push(tag),
	);
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
