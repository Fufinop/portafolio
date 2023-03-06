import { kebabCase } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		id: 0,
		title: 'Title of Project',
		desc: 'Description of Project',
		img: '/static/projects/buildfaster.png',
		width: 400,
		height: 300,
		link: '',
		github: '',
		tags: ['React', 'NextJS', 'TailwindCSS'],
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
