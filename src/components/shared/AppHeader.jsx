import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import logoLight from '../../images/logo-light.jpg';
import { navLinks } from '../../constants';
import { styles } from "../../styles";

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		const navbarHighlighter = () => {
			const sections = document.querySelectorAll("section[id]");

			sections.forEach((current) => {
				const sectionId = current.getAttribute("id");
				const sectionHeight = current.offsetHeight;
				const sectionTop =
					current.getBoundingClientRect().top - sectionHeight * 0.2;
			});
		};

		window.addEventListener("scroll", navbarHighlighter);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("scroll", navbarHighlighter);
		};
	}, []);

	return (
		<nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className={`${styles.paddingX
				} w-full flex items-center py-5 fixed z-20 ${scrolled ? "dark:bg-primary-dark" : "bg-transparent"
				}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				{/* Header menu links and small screen hamburger menu */}
				<div>
					<a href={`#/`}>
						<img
							src={logoLight}
							className="w-36"
							alt="Dark Logo"
						/>
					</a>
				</div>

				{/* Small screen hamburger menu */}
				<div className="sm:hidden">
					<button
						onClick={toggleMenu}
						type="button"
						className="focus:outline-none"
						aria-label="Hamburger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
						>
							{showMenu ? (
								<FiX className="text-3xl" />
							) : (
								<FiMenu className="text-3xl" />
							)}
						</svg>
					</button>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<ul className="sm:flex flex-row gap-10">
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<ul className="sm:flex flex-row gap-10">
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default AppHeader