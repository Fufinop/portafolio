import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Page from '@/components/utility/Page';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';

/**
 * This is a default function that returns a JSX element representing the home page of a website,
 * including a hero section, projects, skills, testimonials, and a call-to-action.
 * @returns The `Home` component is being returned, which contains JSX elements including `Page`,
 * `Hero`, `Projects`, `Skills`, `Testimonials`, and `CTA`. The `Page` component has props
 * `currentPage` and `meta` which are being passed values. The `Projects`, `Skills`, and `Testimonials`
 * components are being rendered with their respective data being passed as props.
 */
export default function Home() {
	return (
		<Page
			currentPage='Home'
			meta={{
				desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
			}}>
			<Hero />
			<div className='mt-20 space-y-32'>
				<Projects />
				<Skills />
				<Testimonials />
			</div>
			<CTA />
		</Page>
	);
}
