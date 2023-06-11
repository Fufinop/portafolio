import Heading from 'components/designs/Heading';
import More from 'components/designs/More';
import Page from 'components/utility/Page';
import Projects from 'components/designs/Designs';
import React from 'react';

/**
 * This is a TypeScript React function that renders an "About" page with a heading, projects, and more
 * information.
 * @returns A JSX element that represents the About page, which includes a Page component with props
 * for the current page and meta information, as well as child components for the heading, projects,
 * and more information.
 */
function about() {
	return (
		<Page
			currentPage='About'
			meta={{
				desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
			}}>
			<Heading />
			<Projects />
			<More />
		</Page>
	);
}

export default about;
