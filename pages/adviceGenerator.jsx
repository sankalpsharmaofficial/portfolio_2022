import Image from 'next/image';
import React from 'react';
import adviceGenImg from '../public/assets/projects/adviceGen.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const adviceGen = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={adviceGenImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Advice Generator</h2>
					<h3>React JS / Tailwind / Firebase</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app was built using basic Javascript functionality and CSS.
						Advice Slip API is used to generate random quotes of advice. By
						Clicking onto the dice button at the bottom it fetches a random
						quote from the API and displays it for the user.
					</p>
					<a
						href="https://github.com/sankalpsharmaofficial?tab=repositories"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://advice-generator-app-using-api.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> CSS
							</p>

							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default adviceGen;
