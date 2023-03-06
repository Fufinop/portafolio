import { useEffect, useState } from 'react';
import Link from 'next/link';
import { routes } from '@/data/global';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

export default function MobileNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isMenuOpen]);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<nav className='relative'>
			<div className='flex items-center justify-between p-5 bg-bg z-10'>
				<li className='list-none font-bold text-lg'>
					<Link href='/'>
						<Image
							alt='logo'
							className='mr-3'
							src='/static/logos/logo_full.svg'
							width='160'
							height='160'
						/>
					</Link>
				</li>
				<button
					className='burger visible md:hidden'
					aria-label='Toggle menu'
					type='button'
					onClick={toggleMenu}>
					{isMenuOpen ? (
						<CrossIcon className='h-5 w-5 absolute text-gray-100' />
					) : (
						<MenuIcon className='h-5 w-5 absolute text-gray-100' />
					)}
				</button>
			</div>
			{isMenuOpen && (
				<ul className='menu absolute inset-x-0 top-20 bg-bg z-10'>
					{routes.map(item => {
						return (
							<li
								key={item.path}
								className='border-b border-gray-900 text-gray-100 text-sm font-semibold'>
								<ScrollLink
									to={item.path}
									smooth
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
