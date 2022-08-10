/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import logoImg from '../public/assets/big_logo/Sankalp_goldlogo.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3 ');
	const [linkColor, setLinkColor] = useState('#1f2937');

	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === '/property' ||
			router.asPath === '/crypto' ||
			router.asPath === '/netflix' ||
			router.asPath === '/twitch'
		) {
			setNavBg('transparent');
			setLinkColor('#ecf0f3 ');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<Image src={logoImg} alt="/" width="135" height="136" />
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
						: ' '
				}
			>
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60 %] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image src={logoImg} width="177" height="177" alt="/" />
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b flex justify-center items-center border-gray-300 my-1">
							<p>Vision | Create | Execute </p>
						</div>
					</div>
					<div className="py-4 flex flex-col ">
						<div className="flex justify-center items-center">
							<ul className="uppercase ">
								<Link href="/">
									<li
										onClick={() => setNav(false)}
										className="py-4 font-bold text-sm"
									>
										Home
									</li>
								</Link>
								<Link href="/#about">
									<li
										onClick={() => setNav(false)}
										className="py-4 font-bold text-sm"
									>
										About
									</li>
								</Link>
								<Link href="/#skills">
									<li
										onClick={() => setNav(false)}
										className="py-4 font-bold text-sm"
									>
										Skills
									</li>
								</Link>
								<Link href="/#projects">
									<li
										onClick={() => setNav(false)}
										className="py-4 font-bold text-sm"
									>
										Projects
									</li>
								</Link>
								<Link href="/#contact">
									<li
										onClick={() => setNav(false)}
										className="py-4 font-bold text-sm"
									>
										Contact
									</li>
								</Link>
							</ul>
						</div>
						<div className="pt-40">
							<p className="uppercase font-bold tracking-widest text-[#5651e5]">
								Let's Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]  ">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
