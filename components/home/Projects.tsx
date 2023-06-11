import Link from 'next/link';
import React from 'react';
import SectionTitle from '../global/SectionTitle';
import projects from '@/data/content/projects';

import ProjectCard from '../projects/ProjectCard';

/* This is a functional component in React that renders a section of the website displaying a few
favorite projects. It includes a SectionTitle component, a grid of ProjectCard components, and a
link to view all projects. The projects data is imported from a separate file. */
function Projects() {
	return (
		<div className='relative flex flex-col justify-between pt-8 text-left'>
			<div id='learnmore'>
				<SectionTitle title='Here are a few of my favorite projects.' />
			</div>
			<div className='grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-5'>
				{projects.slice(0, 3).map(item => {
					return <ProjectCard key={item.id} project={item} />;
				})}
			</div>
			<div className='relative mt-2 w-full'>
				<Link href='/projects'>
					<div className='bg-fun-pink-darkerer mx-auto mt-8 w-full max-w-sm cursor-pointer whitespace-nowrap rounded-full border border-fun-pink px-8 py-3 text-center text-fun-pink transition-colors hover:bg-fun-pink hover:text-white md:max-w-2xl'>
						View All
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Projects;
