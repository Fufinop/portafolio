import Footer from '../global/Footer';
import Head from 'next/head';
import MobileNavbar from '../global/MobileNavbar';
import Navbar from '../global/Navbar';
import React from 'react';

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
	const pageTitle = `${
		currentPage === 'Home'
			? 'Ernesto De la Rosa Zamora - Full StackWeb Developer.'
			: `${currentPage} - Ernesto De la Rosa Zamora`
	}`;
	return (
		<div
			className='w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible'
			style={{ maxWidth: '1200px' }}>
			<Head>
				<title>{pageTitle}</title>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/static/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/static/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/static/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/static/favicon/site.webmanifest' />
				{/* metatag her */}
			</Head>
			<main className='p-5 w-full flex-1 text-center'>
				<div className='hidden sm:block z-100'>
					<Navbar currentPage={currentPage} />
				</div>
				<div className='-m-5 block sm:hidden z-100'>
					<MobileNavbar />
				</div>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Page;

type PageProps = {
	currentPage: string;
	meta: {
		title?: string;
		desc: string;
	};
	children?: JSX.Element | JSX.Element[];
};
