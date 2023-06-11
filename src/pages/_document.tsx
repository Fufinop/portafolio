import Document, { Head, Html, Main, NextScript } from 'next/document';

/* This is a TypeScript React class that renders the HTML and head elements for a web page, including
links to favicon images. */
class MyDocument extends Document {
	/**
	 * This is a React function that renders an HTML document with links to various favicon images.
	 * @returns This is a Next.js `Document` component that is being returned. It includes the HTML
	 * structure of the page, as well as the head and body elements. The head element includes links to
	 * various favicon images and a manifest file. The body element includes the `Main` component and the
	 * `NextScript` component, which are used by Next.js to render the page.
	 */
	render() {
		return (
			<Html lang='en'>
				<Head>
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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
