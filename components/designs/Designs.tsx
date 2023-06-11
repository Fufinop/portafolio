import React from 'react';

/**
 * This is a React component that renders a grid with one column on small screens and two columns on
 * medium screens.
 * @returns A JSX element with a `div` tag that has a class of `grid grid-cols-1 items-start gap-8
 * md:grid-cols-2`.
 */
function Designs() {
	return <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2' />;
}

export default Designs;
