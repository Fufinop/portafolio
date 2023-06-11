import Footer from '../global/Footer';
import Head from 'next/head';
import MobileNavbar from '../global/MobileNavbar';
import Navbar from '../global/Navbar';
import React from 'react';

/**
 * This is a TypeScript React function that renders a page with a title, description, navigation bar,
 * content, and footer.
 * @param {PageProps}  - - `currentPage`: a string representing the current page being rendered
 * @returns The Page component is being returned, which is a React functional component that renders a
 * page with a title, description, navigation bar, content, and footer. The title and description are
 * set based on the current page, and meta tags are included for search engine optimization and social
 * media sharing. The navigation bar is either a desktop or mobile version depending on the screen
 * size, and the content is passed as children
 */
function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
	const pageTitle = `${
		currentPage === 'Home'
			? 'Ernesto De la Rosa Zamora - Full StackWeb Developer.'
			: `${currentPage} - Ernesto De la Rosa Zamora`
	}`;
	return (
		<div
			className='opening-box-animate-paddin m-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white md:overflow-visible'
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
			<main className='w-full flex-1 p-5 text-center'>
				<div className='z-100 hidden sm:block'>
					<Navbar currentPage={currentPage} />
				</div>
				<div className='z-100 -m-5 block sm:hidden'>
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
