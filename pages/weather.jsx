import Image from 'next/image';
import React from 'react';
import weatherImg from '../public/assets/projects/weather.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const weather = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={weatherImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Weather App</h2>
					<h3>Next JS / Tailwind / Open Weather API</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						I built this app to demonstrate knowledge working in React JS and
						accessing API endpoints. This app was built using Next JS and
						Tailwind CSS. This application allows the Users to be able to type
						in any city name and find out the weather of that particular city in
						real time. Open Weather application has allowed us to be able to
						fetch real time weather data from their website and using React
						Icons to be able to show dynamically the weather information of a
						particular city. This application was built using the Open Weather
						API.
					</p>
					<a
						href="https://github.com/sankalpsharmaofficial/nextjs-weather-app"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://nextjs-weather-app-kappa.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1 ">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> OpenWeather API
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> React Icons
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

export default weather;
