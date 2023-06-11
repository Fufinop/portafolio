import React from 'react';

/**
 * The function returns a paragraph with a link to the author's GitHub page.
 * @returns The `More` function is returning a JSX element that contains a paragraph (`<p>`) with a
 * class name of `py-20 text-sm italic text-fun-gray`. The paragraph contains a string of text with a
 * link (`<a>`) to the author's GitHub profile.
 */
function More() {
	return (
		<p className='py-20 text-sm italic text-fun-gray'>
			Hey, hey, hey... I&apos;ve got even more on{' '}
			<a
				className='text-fun-pink underline'
				href='https://github.com/Fufinop'
				target='_blank'
				rel='noopener noreferrer'>
				my GitHub
			</a>
			!
		</p>
	);
}

export default More;
