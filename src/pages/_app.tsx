import 'tailwindcss/tailwind.css';
import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

/**
 * This is a default function in a TypeScript React app that renders a component and an Analytics
 * component.
 * @param {AppProps}  - The `App` function is the root component of a Next.js application. It takes two
 * parameters:
 * @returns The `App` function is returning a JSX expression that renders the `Component` passed as a
 * prop along with its `pageProps`, and also renders an `Analytics` component.
 */
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
