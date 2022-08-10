/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#009394]">Sankalp</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I'm a front-end web developer specializing in building (and
						occasionally designing) exceptional digital experiences. Currently,
						I am focused on building responsive front-end web applications while
						learning back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto p-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="https://www.linkedin.com/in/sankalp-sharma156/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a
								href="https://github.com/sankalpsharmaofficial"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
						</div>
						<a href="mailto: sankalp.sharma156@gmail.com">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
