import Link from 'next/link';
import React from 'react';
import { routes } from '@/data/global';
import Image from 'next/image';

/* This is a functional component in React that renders a navigation bar. It takes in a prop called
`currentPage` which is used to determine which navigation item should be highlighted as active. The
component uses the `Link` component from the Next.js library to create links to different pages
based on the `path` property of each item in the `routes` array. The component also uses the
`Image` component from Next.js to display a logo image. The navigation items are generated
dynamically using the `map` function on the `routes` array. The `className` property is used to
apply different styles to the navigation items based on whether they are currently active or not. */
function Navbar({ currentPage }) {
	return (
		<nav className='flex items-center justify-between'>
			<li className='cursor-pointer list-none text-lg font-bold'>
				<Link href='/'>
					<span className='flex items-center text-xl font-black'>
						<Image
							alt='logo'
							className='mr-2 transition-transform duration-500 hover:rotate-360 hover:scale-75'
							src='/static/logos/logo_no_text.svg'
							width='60'
							height='60'
						/>
						{'Fufinop'.split('').map((letter, index) => {
							return (
								<span
									key={index}
									className='click:goodbyeLetterAnim transition-all duration-500 hover:-mt-2 hover:text-fun-pink hover:duration-100'>
									{letter}
								</span>
							);
						})}
					</span>
				</Link>
			</li>
			<ul className='flex items-center space-x-10'>
				{routes.map((item, index) => {
					return (
						<li
							key={index}
							className={`list-none text-white ${
								currentPage === item.title
									? 'opacity-100'
									: 'opacity-40 transition-opacity hover:opacity-100'
							}`}>
							<Link href={item.path}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
