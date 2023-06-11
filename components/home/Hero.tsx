import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

/**
 * The Hero function returns a JSX component that displays a hero section with a title, subtitle, and a
 * button that links to the about section.
 * @returns A functional component called "Hero" that returns JSX code.
 */
function Hero() {
	return (
		<>
			<div
				className='heroEem z-1 relative m-auto flex w-full flex-col items-center justify-center pt-20 pb-40 text-center'
				style={{ maxWidth: '1200px' }}>
				<p className='mb-5 text-xl'>Hey, I&apos;m Ernesto.</p>
				<h1 className='heroTitle heroShinyBg relative mb-10  inline-block w-auto max-w-2xl text-5xl font-bold tracking-tighter md:text-6xl lg:max-w-4xl lg:text-7xl'>
					Building <span className='heroShiny1 text-fun-pink'>Digital</span>{' '}
					Products <span className='heroShiny2 text-fun-pink'>experiences</span>{' '}
					and future.
				</h1>
				<ScrollLink
					activeClass='active'
					to='./about'
					spy
					offset={-30}
					smooth
					duration={500}>
					<div className='text-fun-white border-fun-white cursor-pointer whitespace-nowrap rounded-full border-2 bg-bg px-10 py-4 text-xl font-bold transition-colors hover:border-fun-pink hover:bg-fun-pink hover:text-white'>
						Tell me more
					</div>
				</ScrollLink>
			</div>
		</>
	);
}

export default Hero;
