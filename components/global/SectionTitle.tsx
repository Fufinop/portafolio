import React from 'react';

type SectionTitleProps = {
	title: string;
};

/**
 * This is a TypeScript React component that renders a section title with responsive styling.
 * @param {SectionTitleProps}  - The function `SectionTitle` takes in a single parameter `title` of
 * type `SectionTitleProps`. The `title` parameter is used as the title of the section and is displayed
 * in an `h2` element with some styling applied to it.
 * @returns A React functional component that renders a section title with a given title prop.
 */
function SectionTitle({ title }: SectionTitleProps) {
	return (
		<div className='w-full overflow-x-hidden pt-5'>
			<h2 className='landingSectionTitle relative mx-auto mb-10 max-w-sm pt-4 text-center text-3xl font-bold md:mx-0 md:w-max md:max-w-max md:pt-0 md:text-left'>
				{title}
			</h2>
		</div>
	);
}

export default SectionTitle;
