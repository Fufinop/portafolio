import { useEffect, useState } from 'react';
import Link from 'next/link';
import { routes } from '@/data/global';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

/**
 * This is a React component for a mobile navigation bar that toggles a menu open and closed.
 */
export default function MobileNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isMenuOpen]);

	/**
	 * The function toggles the state of a menu between open and closed.
	 */
	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<nav className='relative'>
			<div className='z-10 flex items-center justify-between bg-bg p-5'>
				<ul>
					<li className='list-none text-lg font-bold'>
						<Link href='/'>
							<Image
								alt='logo'
								className='mr-3'
								src='/static/logos/logo_no_text.svg'
								width='60'
								height='60'
							/>
						</Link>
					</li>
				</ul>
				<button
					className='burger visible md:hidden'
					aria-label='Toggle menu'
					type='button'
					onClick={toggleMenu}>
					{isMenuOpen ? (
						<CrossIcon className='absolute h-5 w-5 text-gray-100' />
					) : (
						<MenuIcon className='absolute h-5 w-5 text-gray-100' />
					)}
				</button>
			</div>
			{isMenuOpen && (
				<ul className='menu absolute inset-x-0 top-20 z-10 bg-bg'>
					{routes.map(item => {
						return (
							<li
								key={item.path}
								className='border-b border-gray-900 text-sm font-semibold text-gray-100'>
								<ScrollLink
									to={item.path}
									smooth={true}
									duration={500}
									onClick={toggleMenu}
									className='block w-full py-4 px-6'>
									{item.title}
								</ScrollLink>
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
}

/**
 * The function returns a React component that renders a menu icon as an SVG.
 * @param props - an object containing any additional props passed to the component, such as className
 * or onClick.
 * @returns A React functional component that renders an SVG icon with two horizontal lines, resembling
 * a menu icon.
 */
function MenuIcon(props) {
	return (
		<svg
			{...props}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.5 7.5H17.5'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 12.5H17.5'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

/**
 * This is a TypeScript React function that returns a cross icon as an SVG element.
 * @param props - props is an object that contains all the properties passed to the CrossIcon
 * component. These properties can include attributes such as className, style, onClick, etc. The
 * spread operator {...props} is used to pass all the properties to the SVG element.
 * @returns A React component that renders an SVG icon of a cross or X shape.
 */
function CrossIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 24 24'
			width='24'
			height='24'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			shapeRendering='geometricPrecision'>
			<path d='M18 6L6 18' />
			<path d='M6 6l12 12' />
		</svg>
	);
}
