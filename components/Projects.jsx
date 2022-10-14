/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import todoImg from '../public/assets/projects/todo_app.jpg';
import weatherImg from '../public/assets/projects/weather.jpg';
import squidImg from '../public/assets/projects/squid.jpg';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import ProjectItem from './ProjectItem';
import covidImg from '../public/assets/projects/covid.jpg';

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="uppercase text-xl tracking-widest font-bold text-[#009394]">
					Projects
				</p>
				<h2 className="py-4">
					<RoughNotation
						type="highlight"
						color="#ffd54f"
						show="true"
						animationDelay="800"
						animationDuration="1000"
					>
						What I've Built
					</RoughNotation>
				</h2>
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
						title="Covid Tracker App"
						backgroundImg={covidImg}
						projectUrl="/covid"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
