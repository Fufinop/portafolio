import React from 'react';

/**
 * The function returns a paragraph with a link to the author's Dribbble page.
 * @returns A JSX element containing a paragraph with a link to the author's Dribbble page.
 */
function More() {
	return (
		<p className='py-20 text-sm italic text-fun-gray'>
			That&apos;s not all... I&apos;ve got more on{' '}
			<a
				className='text-fun-pink underline'
				href='https://github.com/Fufinop/portafolio'
				target='_blank'
				rel='noopener noreferrer'>
				my Dribbble
			</a>
			!
		</p>
	);
}

export default More;
