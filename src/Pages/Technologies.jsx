import React, { useCallback, useLayoutEffect, useState } from "react";
import { techStackDetails } from "../data/Details.js";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const skills = {
	expert: [
		{icon: techStackDetails.ts, name: 'TypeScript'},
		{icon: techStackDetails.js, name: 'JavaScript'},
		{icon: techStackDetails.react, name: 'React'},
		{icon: techStackDetails.html, name: 'HTML'},
		{icon: techStackDetails.css, name: 'CSS'},
		{icon: techStackDetails.node, name: 'NodeJS'},
		{icon: techStackDetails.github, name: 'GitHub'},
		{icon: techStackDetails.unix, name: 'Unix'},
		{icon: techStackDetails.postman, name: 'Postman'},
		{icon: techStackDetails.vscode, name: 'VSCode'},
		{icon: techStackDetails.git, name: 'Git'},
		{icon: techStackDetails.bun, name: 'Bun'},
		{icon: techStackDetails.zustand, name: 'Zustand'},
		{icon: techStackDetails.tailwind, name: 'Tailwind'},
		{icon: techStackDetails.graphql, name: 'GraphQL'},
		{icon: techStackDetails.express, name: 'Express'},
		{icon: techStackDetails.firebase, name: 'Firebase'},
		{icon: techStackDetails.mongo, name: 'MongoDB'},
	],
	proficient: [
		{icon: techStackDetails.redux, name: 'Redux'},
		{icon: techStackDetails.mui, name: 'Material UI'},
		{icon: techStackDetails.styled, name: 'Styled Components'},
		{icon: techStackDetails.linux, name: 'Linux'},
		{icon: techStackDetails.sql, name: 'SQL'},
		{icon: techStackDetails.jwt, name: 'JWT'},
		{icon: techStackDetails.npm, name: 'npm'},
		{icon: techStackDetails.yarn, name: 'Yarn'},
		{icon: techStackDetails.vite, name: 'Vite'},
		{icon: techStackDetails.next, name: 'NextJS'},
		{icon: techStackDetails.stripe, name: 'Stripe'},
		{icon: techStackDetails.supabase, name: 'Supabase'},
		{icon: techStackDetails.leaflet, name: 'Leaflet'},
		{icon: techStackDetails.clerk, name: 'Clerk'},
	],
	familiar: [
		{icon: techStackDetails.java, name: 'Java'},
		{icon: techStackDetails.python, name: 'Python'},
		{icon: techStackDetails.ruby, name: 'Ruby'},
		{icon: techStackDetails.swift, name: 'Swift'},
		{icon: techStackDetails.php, name: 'PHP'},
		{icon: techStackDetails.wordpress, name: 'WordPress'},
		{icon: techStackDetails.figma, name: 'Figma'},
		{icon: techStackDetails.mapbox, name: 'Mapbox'},
		{icon: techStackDetails.photoshop, name: 'Photoshop'},
		{icon: techStackDetails.finalCut, name: 'Final Cut Pro'},
		{icon: techStackDetails.premiere, name: 'Premiere Pro'},
	],
};

function Technologies() {

	const location = useLocation();
	const [tooltip, setTooltip] = useState({
		visible: false,
		text: "",
		x: 0,
		y: 0,
	});

	const initializePositions = useCallback((level, index, total) => {
		const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4;
		const angle = (index / total) * Math.PI * 2;

		return {
			x: Math.cos(angle) * radius + (Math.random() - 0.5) * 100,
			y: Math.sin(angle) * radius + (Math.random() - 0.5) * 100,
			rotation: Math.random() * 360,
			scale: level === "expert" ? 1 : level === "proficient" ? 0.8 : 0.5,
		};
	}, []);

	const startAnimation = useCallback((element) => {
		const level = element.getAttribute("data-level");
		const speedMultiplier =
			level === "expert" ? 0.7 : level === "proficient" ? 1.2 : 1.7;

		function createRandomMovement() {
			const bounds = {
				x: window.innerWidth,
				y: window.innerHeight,
			};

			const newX = (Math.random() - 0.5) * bounds.x * 0.95;
			const newY = (Math.random() - 0.5) * bounds.y * 0.95;
			const baseDuration = 25;
			const duration = baseDuration / speedMultiplier;

			gsap.to(element, {
				x: newX,
				y: newY,
				rotation: Math.random() * 360,
				duration: duration,
				ease: "none",
				onComplete: createRandomMovement,
			});
		}

		createRandomMovement();
	}, []);

	useLayoutEffect(() => {
		const elements = document.querySelectorAll("[data-skill]");
		const elementsArray = Array.from(elements);

		gsap.killTweensOf(elements);

		elementsArray.forEach((element, index) => {
			const level = element.getAttribute("data-level");
			const initialPos = initializePositions(
				level,
				index,
				elementsArray.length
			);
			gsap.set(element, initialPos);
		});

		setTimeout(() => {
			elementsArray.forEach((element) => {
				startAnimation(element);
			});
		}, 100);

		return () => {
			gsap.killTweensOf(elements);
		};
	}, [location, startAnimation, initializePositions]);

	const handleMouseEnter = (e, level) => {
		const text =
			level === "expert"
				? "Advanced"
				: level === "proficient"
				? "Proficient"
				: "Familiar";
		setTooltip({ visible: true, text, x: e.clientX, y: e.clientY });
	};

	const handleMouseLeave = () => {
		setTooltip({ visible: false, text: "", x: 0, y: 0 });
	};

	return (
		<>
			<h1 className="text-md mr-[-2px] md:mr-[-1px] md:text-2xl dark-text dark:light-text page-title">
				Technologies
			</h1>
			<div className="relative w-full h-full overflow-hidden p-12">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="relative w-full h-full flex items-center justify-center">
						{Object.entries(skills).map(([level, skillSet]) =>
							skillSet.map(({ icon, name }) => (
								<div
									key={name}
									data-skill={name}
									data-level={level}
									className="absolute hover:scale-110 transition-transform duration-200 group cursor-pointer"
									style={{ willChange: "transform" }}
									onMouseEnter={(e) => handleMouseEnter(e, level)}
									onMouseLeave={handleMouseLeave}>
									<img
										src={icon}
										alt={name}
										title={name}
										className="w-12 h-12 md:w-16 md:h-16 object-contain"
									/>
									<span
										className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full
									opacity-0 group-hover:opacity-100 transition-opacity
									text-md text-center mt-2 whitespace-nowrap
									dark:text-white text-black font-medium">
										{name}
									</span>
								</div>
							))
						)}
					</div>
				</div>

				{tooltip.visible && (
					<div
						className="absolute bg-gray-800 text-white p-2 rounded text-xs"
						style={{ top: tooltip.y, left: tooltip.x }}>
						{tooltip.text}
					</div>
				)}
			</div>
		</>
	);
}

export default Technologies;
