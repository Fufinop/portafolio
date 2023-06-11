import React from 'react';
import projects from '@/data/content/projects';
import { Project } from 'types';
import ProjectCard from './ProjectCard';

type ProjectProps = {
	overwriteProjects?: Project[];
};

/* This is a functional component in TypeScript React that renders a list of projects using the
`ProjectCard` component. The component takes in a prop `overwriteProjects` of type `Project[]` which
is an optional array of projects that can be used to overwrite the default `projects` array. If
`overwriteProjects` is provided, it is used to render the list of projects, otherwise, the default
`projects` array is used. The `projectsList` variable is assigned the value of `overwriteProjects`
if it exists, otherwise, it is assigned the value of `projects`. The `map` function is used to
iterate over each project in the `projectsList` array and render a `ProjectCard` component for each
project. The `key` prop is set to the `id` of each project to ensure that each `ProjectCard`
component is unique. */
function Projects({ overwriteProjects }: ProjectProps) {
	const projectsList = overwriteProjects ? overwriteProjects : projects;
	return (
		<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-3'>
			{projectsList.map(item => {
				return <ProjectCard key={item.id} project={item} />;
			})}
		</div>
	);
}

export default Projects;
