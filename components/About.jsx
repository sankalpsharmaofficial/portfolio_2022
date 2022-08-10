import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../public/assets/me/my_pic.jpg';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
				<div className="col-span-2 ">
					<p className="uppercase font-bold text-xl tracking-widest text-[#009394]">
						About
					</p>
					<h2 className="py-4 ">Who I am </h2>
					<p className="py-2 text-gray-600">
						A passionate Frontend Developer, Photographer! 👨🏻‍💻📸
					</p>
					<p className="py-2 text-gray-600">
						👀 I’m interested in Frontend technologies 🌱 I’m currently learning
						Web3 and trying to work on a project that implements it. 💬 Ask me
						about web development
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						<Link href="/#projects">Check out my latest projects</Link>
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						className="rounded-xl"
						src={meImg}
						alt="/"
						width="402px"
						height="413px"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
