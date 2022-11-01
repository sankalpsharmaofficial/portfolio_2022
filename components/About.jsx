import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../public/assets/me/my_pic.jpg';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const About = () => {
	const { ref, inView } = useInView();
	// const [rerender, setRerender] = useState(false);
	// useEffect(() => {
	// 	setRerender(!rerender);
	// }, [inView, rerender]);

	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
				<div ref={ref} className="col-span-2 ">
					<p className="uppercase font-bold text-xl tracking-widest text-[#009394]">
						About
					</p>
					<RoughNotationGroup show="true">
						<h2 className="py-4 ">
							<RoughNotation
								type="highlight"
								color="#ffd54f"
								animationDelay="800"
								animationDuration="1000"
							>
								Who I am
							</RoughNotation>
						</h2>
						<p className="py-2 text-gray-600">
							<RoughNotation
								type="underline"
								color="#29C5F6"
								strokeWidth="2"
								animationDelay="800"
								animationDuration="1000"
							>
								A passionate Frontend Developer, Photographer! 👨🏻‍💻📸
							</RoughNotation>
						</p>
					</RoughNotationGroup>

					<p className="py-2 text-gray-600">
						👀 I’m interested in Frontend technologies 🌱 I’m currently learning
						Web3 and trying to work on a project that implements it. 💬 Ask me
						about web development
					</p>
					<p className="py-2 text-gray-600 cursor-pointer">
						<Link href="/#projects">
							<RoughNotation
								type="highlight"
								color="#FDA172"
								show="true"
								animationDelay="1000"
								animationDuration="1000"
							>
								Check out my latest projects
							</RoughNotation>
						</Link>
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
