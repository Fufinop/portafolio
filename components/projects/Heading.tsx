import React from 'react';
import Image from 'next/image';

type HeadingProps = {
	tag?: string;
};

/* This is a functional component called `Heading` that takes in a prop called `tag` of type `string`.
The component returns a `div` element with a conditional rendering of either a heading with the
`tag` prop or a default heading. If the `tag` prop is provided, the heading will display "Projects
built with [tag]" and an image of code. If the `tag` prop is not provided, the heading will display
"Projects" and an image of code. Additionally, if the `tag` prop is not provided, a paragraph
describing the author's programming interests is displayed. The component is exported as the default
export. */
function Heading({ tag }: HeadingProps) {
	return (
		<div
			className={`${
				tag ? 'pt-10 pb-4 sm:pt-24 sm:pb-20' : 'py-12 sm:py-20'
			} relative w-full text-center`}>
			{tag ? (
				<>
					<h1 className='relative mx-auto mb-8 inline-block w-auto text-3xl sm:text-4xl'>
						Projects built with <b>{tag}</b>
						<Image
							alt='code'
							className='sqD absolute -top-6 -right-2 w-8 sm:-right-8 sm:-top-8 sm:w-10'
							src='/static/doodles/hero/code.svg'
							width={500}
							height={500}
						/>
					</h1>
				</>
			) : (
				<h1 className='relative mx-auto mb-8 inline-block w-auto text-4xl sm:text-6xl'>
					Projects
					<Image
						alt='code'
						className='sqD absolute -top-8 -right-8 w-10'
						src='/static/doodles/hero/code.svg'
						width={500}
						height={500}
					/>
				</h1>
			)}
			{!tag && (
				<p className='m-auto max-w-3xl text-xl text-fun-gray sm:text-2xl'>
					I like to program, I have a wide variety of projects although not all
					of them are uploaded, these are some of my favorites.
				</p>
			)}
		</div>
	);
}

export default Heading;
