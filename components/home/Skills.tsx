import React from 'react';
import { skills } from '@/data/content/home';
import Image from 'next/image';

/* The `Skills` function is rendering a section of a webpage that displays a list of skills with their
corresponding icons and titles. It uses the `skills` array from the `home` content data to map
through each skill and display it in a grid format. The `Image` component from the `next/image`
library is used to display each skill's icon. The function also includes some responsive styling to
adjust the layout of the skills grid based on the screen size. */
function Skills() {
	return (
		<div className='relative flex flex-col justify-between py-20 md:flex-row'>
			<h2 className='relative mb-10 mr-0 w-full justify-center text-center text-3xl font-bold md:mr-10 md:mb-0 md:w-max md:max-w-lg md:text-left'>
				I got the experience.
				<br />
				Here is my toolbelt for success.
			</h2>
			<div className='md:mx-none relative mx-auto grid w-full max-w-lg grid-cols-3 place-content-center items-center gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-8 md:gap-12'>
				{skills.map((item, index) => {
					return (
						<div
							title={item.title}
							key={index}
							className='mx-auto flex w-10 flex-col items-center justify-center'>
							<Image
								alt='item'
								src={item.icon}
								style={item.style}
								width={150}
								height={150}
							/>
							<p className='mt-3 text-xs font-bold text-fun-gray opacity-80'>
								{item.title}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
