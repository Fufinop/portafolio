import React from 'react';
import Image from 'next/image';

type HeadingProps = {
	tag?: string;
};

function Heading({ tag }: HeadingProps) {
	return (
		<div
			className={`${
				tag ? 'pt-10 pb-4 sm:pt-24 sm:pb-20' : 'py-12 sm:py-20'
			} w-full text-center relative`}>
			{tag ? (
				<>
					<h1 className='text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative'>
						Projects built with <b>{tag}</b>
						<Image
							alt='code'
							className='sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute'
							src='/static/doodles/hero/code.svg'
							width={500}
							height={500}
						/>
					</h1>
				</>
			) : (
				<h1 className='text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative'>
					Projects
					<Image
						alt='code'
						className='sqD w-10 -top-8 -right-8 absolute'
						src='/static/doodles/hero/code.svg'
						width={500}
						height={500}
					/>
				</h1>
			)}
			{!tag && (
				<p className='text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto'>
					I like to program, I have a wide variety of projects although not all
					of them are uploaded, these are some of my favorites.
				</p>
			)}
		</div>
	);
}

export default Heading;
