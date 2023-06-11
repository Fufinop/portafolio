import React from 'react';

/**
 * This is a React functional component that renders a heading with a title and a subtitle.
 * @returns A React functional component that renders a heading with a title and a subtitle.
 */
function Heading() {
	return (
		<div className='relative w-full py-16 text-center sm:py-20'>
			<h1 className='relative mb-8 inline-block w-auto text-4xl sm:text-6xl'>
				Designs
			</h1>
			<p className='text-xl text-fun-gray sm:text-2xl'>
				Enough said. Let&apos;s have the pictures do the talking.
			</p>
		</div>
	);
}

export default Heading;
