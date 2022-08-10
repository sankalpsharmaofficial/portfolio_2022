/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import todoImg from '../public/assets/projects/todo_app.jpg';
import weatherImg from '../public/assets/projects/weather.jpg';
import squidImg from '../public/assets/projects/squid.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest font-bold text-[#009394]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Todo App"
						backgroundImg={todoImg}
						projectUrl="/todo"
					/>
					<ProjectItem
						title="Weather App"
						backgroundImg={weatherImg}
						projectUrl="/weather"
					/>
					<ProjectItem
						title="Squid Game App"
						backgroundImg={squidImg}
						projectUrl="/squidGame"
					/>
					<ProjectItem
						title="Twitch App"
						backgroundImg={twitchImg}
						projectUrl="/twitch"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
