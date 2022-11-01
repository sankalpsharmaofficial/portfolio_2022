import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';

import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sankalp | Frontend Developer</title>
				<meta name="description" content="Made by Sankalp Sharma" />
				<link rel="icon" href="/public/assets/favicon/favicon.ico" />
			</Head>

			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
