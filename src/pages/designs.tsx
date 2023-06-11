import Heading from 'components/designs/Heading';
import More from 'components/designs/More';
import Page from 'components/utility/Page';
import Projects from 'components/designs/Designs';
import React from 'react';

/**
 * This is a TypeScript React function that renders a page displaying the designer's projects and links
 * to more designs.
 * @returns The `designs()` function is returning a JSX code block that renders a `Page` component with
 * a `currentPage` prop set to "Designs" and a `meta` prop containing a description. Inside the `Page`
 * component, there are three child components being rendered: `Heading`, `Projects`, and `More`.
 */
function designs() {
	return (
		<Page
			currentPage='Designs'
			meta={{
				desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
			}}>
			<Heading />
			<Projects />
			<More />
		</Page>
	);
}

export default designs;
