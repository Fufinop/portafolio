import React from 'react';
import SectionTitle from '../global/SectionTitle';
import { testimonials } from '@/data/content/home';

/* This is a functional component in React that renders a section of testimonials. It uses the
`testimonials` array from the `home` data file to map through each testimonial and render it as a
styled `div` element with the quote and the name and job of the person who gave the testimonial. It
also includes a `SectionTitle` component to display the title of the section. */
function Testimonials() {
	return (
		<div className='m-auto flex w-full max-w-md flex-col text-left md:max-w-full'>
			<SectionTitle title='Why people love my work!' />
			<div className='m-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:max-h-[200px] md:grid-cols-3 md:gap-10'>
				{testimonials.map((item, index) => {
					return (
						<div
							key={index}
							className='relative flex h-full flex-col justify-between rounded-lg border border-fun-pink-light bg-fun-pink-darker p-5'>
							<p className='testimonialQuote relative text-base italic'>
								&quot;{item.quote}&quot;
							</p>
							<p className='mt-4 text-xs text-fun-gray'>
								<b className='font-monospace text-fun-pink'>{item.name}</b> -{' '}
								{item.job}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Testimonials;
