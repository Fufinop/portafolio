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
				{/* HTML Meta Tags  */}
				<meta
					name='description'
					content='This is my personal portfolio, where I host my projects as a developer. Here you will find projects in which I have worked and used different technologies.'
				/>

				{/* Facebook Meta Tags  */}
				<meta property='og:url' content='https://ernestodelarosa.me/' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Ernesto De la Rosa Zamora - Full StackWeb Developer.'
				/>
				<meta
					property='og:description'
					content='This is my personal portfolio, where I host my projects as a developer. Here you will find projects in which I have worked and used different technologies.'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/Fufinop/portafolio/main/preview.png'
				/>

				{/* Twitter Meta Tags  */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://ernestodelarosa.me/' />
				<meta
					name='twitter:title'
					content='Ernesto De la Rosa Zamora - Full StackWeb Developer.'
				/>
				<meta
					name='twitter:description'
					content='This is my personal portfolio, where I host my projects as a developer. Here you will find projects in which I have worked and used different technologies.'
				/>
				<meta
					name='twitter:image'
					content='https://raw.githubusercontent.com/Fufinop/portafolio/main/preview.png'
				/>

				{/* Meta Tags Generated via https://iplocation.io*/}
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
