import Heading from 'components/projects/Heading';
import More from 'components/projects/More';
import Page from 'components/utility/Page';
import Projects from 'components/projects/Projects';
import React from 'react';

/**
 * This is a function that returns a page with a heading, a list of projects, and a "more" section, all
 * with metadata for search engines.
 * @returns The `projects()` function is returning a JSX element that represents a web page with a
 * heading, a list of projects, and a "More" button. The `Page` component is being used to set the
 * current page and provide metadata for search engines. The `Heading`, `Projects`, and `More`
 * components are likely defined elsewhere in the codebase and are being imported and used here.
 */
function projects() {
	return (
		<Page
			currentPage='Projects'
			meta={{
				title: 'Projects',
				desc: 'I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.',
			}}>
			<Heading />
			<Projects />
			<More />
		</Page>
	);
}

export default projects;
