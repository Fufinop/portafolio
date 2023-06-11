import React from 'react';
import Image from 'next/image';
import { kebabCase } from '@/utils/utils';
import Link from 'next/link';

/* This is a functional component called `ProjectCard` that takes in a prop called `project`. It
returns a JSX element that displays information about a project, including an image, title,
description, and tags. The component also includes links to the project's website and GitHub
repository if available. The `key` prop is used to uniquely identify each project card when
rendering a list of projects. */
function ProjectCard({ project }) {
	return (
		<div
			className='projects-center md:projects-start mx-auto flex max-w-sm flex-col md:justify-center'
			key={project.id}>
			<a
				href={project.link || project.github}
				target='_blank'
				rel='noopener noreferrer'
				className={
					'relative w-full rounded-xl border border-fun-gray p-2 transition will-change-projectCard hover:-translate-y-2 hover:border-fun-pink hover:opacity-75'
				}>
				<Image
					alt='project image'
					className='w-full rounded-md'
					src={project.img}
					height={project.height}
					width={project.width}
				/>
			</a>
			<div className='mt-5 w-full'>
				<div className='projects-center flex justify-between'>
					<a
						href={project.link || project.github}
						target='_blank'
						rel='noopener noreferrer'>
						<h3 className='text-lg font-bold'>{project.title}</h3>
					</a>
					<div className='space-x-2 flex'>
						{project.link && (
							<a href={project.link} target='_blank' rel='noreferrer'>
								<Image
									src='/static/icons/external-link.svg'
									width={16}
									height={16}
									alt='Link Icon'
								/>
							</a>
						)}
						{project.github && (
							<a href={project.github} target='_blank' rel='noreferrer'>
								<Image
									src='/static/icons/github.svg'
									width={16}
									height={16}
									alt='Github Icon'
								/>
							</a>
						)}
					</div>
				</div>
				<p className='text-left text-sm text-fun-gray'>{project.desc}</p>
				<ul className='mt-2 -ml-2 flex list-none flex-wrap items-center'>
					{project.tags.map(tag => {
						return (
							<li key={tag}>
								<Link href={`/projects/tag/${kebabCase(tag)}`}>
									<div className='m-1 cursor-pointer rounded-lg bg-fun-pink-dark py-1 px-2 text-sm hover:opacity-75'>
										{tag}
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ProjectCard;
