import Image from 'next/image';
import React from 'react';
import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import javascriptImg from '../public/assets/skills/javascript.jpg';
import reactImg from '../public/assets/skills/react.png';
import tailwindImg from '../public/assets/skills/tailwind.png';
import firebaseImg from '../public/assets/skills/firebase.png';
import githubImg from '../public/assets/skills/github.png';
import nextJSImg from '../public/assets/skills/nextjs.png';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase font-bold text-[#009394] ">
					Skills
				</p>
				<h2 className="py-4">
					<RoughNotation
						type="highlight"
						color="#ffd54f"
						show="true"
						animationDelay="800"
						animationDuration="1000"
					>
						What I Can Do
					</RoughNotation>
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={htmlImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								HTML
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={cssImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								CSS
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={javascriptImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								Javascript
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={reactImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								React
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={tailwindImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								Tailwind
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={firebaseImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								Firebase
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={githubImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								Github
							</div>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto ">
								<Image src={nextJSImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col font-bold justify-center items-center">
								NextJs
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
