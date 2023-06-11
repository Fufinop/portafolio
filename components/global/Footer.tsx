import Link from 'next/link';
import React from 'react';
import { footer } from '@/data/global';
import Image from 'next/image';

/* This is a functional component in React that renders the footer section of a website. It uses data
from the `footer` object in the `global` data file to dynamically generate the content of the
footer. The footer includes links to various pages and social media accounts, as well as options to
support the creator's work through Buy Me a Coffee and PayPal. It also includes information about
the technologies used to build the website and a link to the source code on GitHub. */
function Footer() {
	return (
		<footer className='z-5 flex w-screen flex-col border-t border-fun-pink-darker bg-bg px-5 py-10'>
			<div className='m-auto grid w-full max-w-4xl grid-cols-2 items-start justify-between sm:grid-cols-3'>
				{footer.columns.map((item, index) => {
					return (
						<div key={index} className='mb-5 text-left sm:mb-0'>
							<h4 className='text-sm font-bold uppercase text-fun-gray'>
								{item.title}
							</h4>
							<div>
								{item.links.map((item, index) => {
									return (
										<div key={index} className='my-4'>
											{item.leavesWebsite ? (
												<a
													href={item.link}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center'>
													{item.icon && (
														<span className='-mb-1 pr-2'>
															<Image
																src={item.icon}
																alt='icon'
																width={30}
																height={30}
															/>
														</span>
													)}
													{item.name}
												</a>
											) : (
												<Link href={item.link}>{item.name}</Link>
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
				<div className='col-span-2 border-t border-fun-pink-dark pt-8 text-center text-fun-gray sm:col-auto sm:mt-0 sm:border-0 sm:pt-0 sm:text-left'>
					<h4 className='text-center text-sm font-bold uppercase text-fun-gray'>
						Support My Work
					</h4>
					<div className='mt-4 flex w-full flex-col items-center space-y-2 sm:items-start'>
						{footer.support.buymeacoffee !== '' && (
							<div className='flex w-full justify-center'>
								<Link
									className='flex items-center justify-center text-center'
									href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
									target='_blank'
									rel='noreferrer'>
									<Image
										alt='Buy me a coffee'
										src='/static/misc/buy-me-a-coffee.svg'
										className='mx-auto h-12 opacity-100 transition-opacity hover:opacity-80'
										width={220}
										height={220}
									/>
								</Link>
							</div>
						)}
						{footer.support.paypal !== '' && (
							<div className='flex w-full justify-center'>
								<Link
									href={`https://paypal.me/${footer.support.paypal}`}
									target='_blank'
									rel='noreferrer'>
									<Image
										alt='Paypal'
										src='/static/misc/paypal.svg'
										className='h-12 opacity-100 transition-opacity hover:opacity-80'
										width={220}
										height={220}
									/>
								</Link>
							</div>
						)}
						<p className='w-full pt-1 text-center text-xs text-fun-gray'>
							{footer.support.message}
						</p>
					</div>
				</div>
			</div>
			<div className='m-auto mt-8 w-full max-w-4xl border-t border-fun-pink-dark pt-8 text-center text-fun-gray sm:mt-4 sm:pt-4'>
				<section className='flex flex-col items-center justify-center '>
					<div className='inline-flex items-center text-xs font-bold uppercase tracking-widest'>
						Made with{' '}
						<div className='-mt-1 ml-3 inline-flex items-center space-x-2'>
							<span>
								<Image
									alt='React'
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
									width='26'
									height={26}
									title='React'
								/>
								<span className='sr-only'>React</span>
							</span>
							<span>
								<Image
									alt='NextJS'
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
									width='40'
									height={40}
									className='invert'
									title='NextJS'
								/>
								<span className='sr-only'>NextJS</span>
							</span>
							<span>
								<Image
									alt='TailwindCSS'
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
									title='TailwindCSS'
									width='26'
									height={26}
								/>
								<span className='sr-only'>TailwindCSS</span>
							</span>
						</div>
					</div>
					<div className='mt-2 text-xs '>
						Made by{' '}
						<a
							href='mailto:ernestodelazamora@gmail.com'
							className='font-medium text-fun-gray-light'>
							Fufinop
						</a>
						. All rights reserved.
					</div>
				</section>
			</div>
			<div className='mt-8 text-center sm:-mt-12 sm:text-right'>
				<Link
					className='inline-flex w-auto shrink cursor-pointer items-center rounded-xl border border-fun-pink px-4 py-2 text-xs font-bold text-fun-pink opacity-50 sm:w-auto'
					href='https://github.com/Fufinop/portafolio'
					target='_blank'
					rel='nooreferrer'>
					<Image
						src='/static/icons/github.svg'
						width={16}
						height={16}
						alt='Github Icon'
					/>
					<span className='ml-2'>View Source Code </span>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
