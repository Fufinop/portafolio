import Link from 'next/link';
import { randomNumberText } from '@/utils/utils';
import { useEffect, useState } from 'react';

/* This is a React functional component that renders a custom 404 error page. It uses the `useState`
hook to manage the state of the `num404` variable, which is initially set to `'0000'`. It also uses
the `useEffect` hook to generate a random number text using the `randomNumberText` utility function
and update the `num404` state variable with it. */
function Page404() {
	const [num404, setNum404] = useState('0000');

	useEffect(() => {
		randomNumberText('404', setNum404);
	}, []);

	return (
		<>
			{num404 !== '0000' && (
				<div className='animate-fadeIn flex min-h-screen w-full flex-col items-center justify-center'>
					<h1 className='font-monospace text-7xl font-bold text-white opacity-100'>{`{ error: ${num404} }`}</h1>
					<p className='mt-8 flex items-center text-xl text-fun-gray'>
						Sorry, looks like that page is missing!&nbsp;&nbsp;
						<Link href='/'>
							<span className='bg-fun-pink-darkerer w-full shrink cursor-pointer rounded-xl border border-fun-pink-light px-4 py-1 text-base text-fun-pink-light transition-colors hover:bg-fun-pink hover:text-white sm:w-auto'>
								Return Home
							</span>
						</Link>
					</p>
				</div>
			)}
		</>
	);
}

export default Page404;
