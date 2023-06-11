import Page from 'components/utility/Page';

import { GetStaticProps, GetStaticPaths } from 'next';
import { allKebabTags, allTags } from '@/data/content/projects';

import projects from '@/data/content/projects';

import { kebabCase, kebabArray } from '@/utils/utils';
import Projects from 'components/projects/Projects';
import Heading from 'components/projects/Heading';
import Link from 'next/link';

/**
 * This function generates static paths for all unique tags in a list of projects.
 * @returns This code is defining a function called `getStaticPaths` that returns an object with two
 * properties: `paths` and `fallback`. The `paths` property is an array of objects, where each object
 * represents a dynamic route parameter for the page. In this case, the dynamic parameter is `tag`,
 * which is derived from the `allTagsPaths` array. The `fallback` property is set
 */
export const getStaticPaths: GetStaticPaths = async () => {
	const allTags = [];
	projects.forEach(project =>
		project.tags.forEach(tag => {
			allTags.push(tag);
		}),
	);
	const uniqueAllTags = [...new Set(allTags)];
	const allTagsPaths = uniqueAllTags.map(path => ({
		params: { tag: `${kebabCase(path)}` },
	}));
	return {
		paths: allTagsPaths,
		fallback: false,
	};
};

/**
 * This function retrieves static props for a specific tag by filtering projects based on the tag
 * parameter.
 * @param  - This is a function called `getStaticProps` that is being exported as a constant. It is
 * using the `GetStaticProps` type from Next.js to define the type of the function. The function takes
 * in an object with a `params` property, which is an object with a `tag
 * @returns The `getStaticProps` function is returning an object with a `props` property that contains
 * the `filteredProjects` array and the `tag` string. The `filteredProjects` array is the result of
 * filtering the `projects` array based on whether the `tags` property of each project includes the
 * `tag` parameter passed to the function. The `JSON.parse(JSON.stringify())` method is
 */
export const getStaticProps: GetStaticProps = async ({
	params,
}: {
	params: { tag: string };
}) => {
	const tag = params.tag;
	const filteredProjects = projects.filter(project =>
		[...kebabArray(project.tags)].includes(tag),
	);
	return {
		props: JSON.parse(
			JSON.stringify({
				filteredProjects,
				tag: tag,
			}),
		),
	};
};

/* This is a React functional component called `PostPage` that takes in two props: `filteredProjects`
and `tag`. It renders a `Page` component with a `meta` object containing a `title` and `desc`
property based on the `tag` prop. It also renders a `Heading` component with the `capsTag` variable
as a prop, a `Projects` component with the `filteredProjects` prop, and a `Link` component to the
`/projects` page. The `Link` component contains a `div` element with some styling and text that
says "View All". */
function PostPage({ filteredProjects, tag }) {
	const capsTag = allTags[allKebabTags.indexOf(tag)];
	return (
		<Page
			currentPage='Projects'
			meta={{
				title: `${capsTag} Projects`,
				desc: `A showcase for all of my ${capsTag} projects.`,
			}}>
			<Heading tag={capsTag} />
			<Projects overwriteProjects={filteredProjects} />

			<Link href='/projects'>
				<div className='bg-fun-pink-darkerer mx-auto mt-8 w-full max-w-sm cursor-pointer whitespace-nowrap rounded-full border border-fun-pink px-8 py-3 text-center text-fun-pink transition-colors hover:bg-fun-pink hover:text-white md:max-w-2xl'>
					View All
				</div>
			</Link>
		</Page>
	);
}

export default PostPage;
