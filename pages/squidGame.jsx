import Image from 'next/image';
import React from 'react';
import squidImg from '../public/assets/projects/squid.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const squid = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={squidImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Squid Game App</h2>
					<h3>Three JS / CSS</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						I built this application in Three JS and is hosted on GitHub pages.
						This app is built using Three JS. I have used a 3d model of a doll
						to be able to use as the main prop for the project. This app was
						based on the popular netflix series called Squid Game where the user
						has to navigate the ball through a track behind the doll. The
						objective is to not get caught by the doll and listen to the sounds
						as que for when the doll would turn back as it is a random motion
						based on the music. Hope you have fun playing the game.
					</p>
					<a
						href="https://github.com/sankalpsharmaofficial/Squid-Game"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://sankalpsharmaofficial.github.io/Squid-Game/"
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
								<RiRadioButtonFill className="pr-1" /> Three JS
							</p>
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

export default squid;
