import React from 'react';
import Image from 'next/image';

/* This is a functional component in TypeScript React that returns a JSX element. The component
renders a section with a heading and a button that links to an email address. It also includes an
Image component from the Next.js library that displays an SVG image with some styling properties. */
function CTA() {
	return (
		<div className='relative w-full pt-36'>
			<div className='pt-14 pb-40'>
				<h2 className='mb-10 text-4xl font-bold md:text-5xl'>
					Interested in Working Together?
				</h2>
				<a
					href='mailto:ernestodelazamora@gma'
					className='mt-6 cursor-pointer whitespace-nowrap
        rounded-full border-2 border-white bg-bg px-8 py-3 font-bold text-white transition-colors hover:border-fun-pink hover:bg-fun-pink'>
					Get in Touch
				</a>
			</div>

			<Image
				alt='Fancy lines'
				className='sqD bottom-[-100px] left-1/2 min-w-[800px] -translate-x-1/2 object-cover sm:bottom-[-150px] sm:min-w-[1100px]'
				style={{ zIndex: '-10' }}
				src='/static/doodles/hero/303678.svg'
				height={500}
				width={500}
			/>
		</div>
	);
}

export default CTA;
