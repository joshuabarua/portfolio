import React from 'react';
import {techStackDetails} from '../data/details.js';
import gsap from 'gsap';

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

function rotate(target, direction) {
	gsap.to(target, {
		rotation: randomAngle(direction),
		duration: randomTime2(),
		ease: 'sine.inOut',
		onComplete: rotate,
		onCompleteParams: [target, direction * -1],
	});
}

function moveX(target, direction) {
	gsap.to(target, {
		x: randomX(direction),
		duration: randomTime(),
		ease: 'sine.inOut',
		onComplete: moveX,
		onCompleteParams: [target, direction * -1],
	});
}

function moveY(target, direction) {
	gsap.to(target, {
		duration: randomTime(),
		y: randomY(direction),
		ease: 'sine.inOut',
		onComplete: moveY,
		onCompleteParams: [target, direction * -1],
	});
}

function random(min, max) {
	const delta = max - min;
	return (direction = 1) => (min + delta * Math.random()) * direction;
}

function Technologies() {
	const {html, css, js, react, redux, tailwind, vscode, git, github, npm, postman, figma} = techStackDetails;

	const iconImgs = gsap.utils.toArray('.tech img');
	iconImgs.forEach((icon) => {
		gsap.set(icon, {
			x: randomX(-1),
			y: randomX(1),
			rotation: randomAngle(-1),
		});

		moveX(icon, 1);
		moveY(icon, -1);
		rotate(icon, 1);
	});

	return (
		<>
			<h1 className="text-2xl dark-text dark:light-text page-title">Technologies</h1>
			<main className="h-screen w-[80%] flex justify-center items-center flex-col">
				<div className="md:mt-12 px-4 md:px-16 flex gap-10 flex-col">
					<section>
						<h4 className="text-md dark-text dark:light-text md:text-xl xl:leading-tight font-bold opacity-70">Frequently Used</h4>
						<section className="tech flex flex-wrap items-center gap-5 pt-2 pb-6">
							<img src={techStackDetails.ts} title="Typescript" alt="" />
							<img src={js} title="JavaScript" alt="" />
							<img src={html} title="HTML" alt="" />
							<img src={css} title="CSS" alt="" />
							<img src={react} title="React" alt="" />
							<img src={redux} title="Redux" alt="" />
							<img src={techStackDetails.graphql} title="GraphQL" alt="" />
							<img src={techStackDetails.mongo} title="MongoDB" alt="" />
							<img src={techStackDetails.node} title="NodeJS" className="dark:bg-white rounded-md" alt="" />
							<img src={tailwind} title="Tailwind CSS" alt="" />
							<img src={techStackDetails.mui} title="Material UI" alt="" />
							<img src={techStackDetails.styled} title="Styled Components" alt="" />
							<img src={techStackDetails.jwt} title="JWT" alt="" />
							<img src={techStackDetails.express} title="Express" alt="" style={{background: 'white', borderRadius: '50%'}} />
							<img src={techStackDetails.firebase} title="Firebase" alt="" />
							<img src={techStackDetails.json} title="JSON" alt="" />
							<img src={techStackDetails.zustand} title="Zustand" alt="" />
							<img src={techStackDetails.rest} title="RESTful" alt="" className="dark:bg-white rounded-md" />
						</section>
					</section>
					<section>
						<h4 className="text-md dark-text dark:light-text md:text-xl xl:leading-tight font-bold opacity-70">Familiar With</h4>
						<section className="tech flex flex-wrap items-center gap-5 pt-2 pb-6">
							<img src={techStackDetails.java} title="Java" alt="" />
							<img src={techStackDetails.sql} title="MySQL" alt="" />
							<img src={techStackDetails.php} title="PHP" alt="" />
							<img src={techStackDetails.ruby} title="Ruby" alt="" />
							<img src={techStackDetails.swift} title="Swift" alt="" />
							<img src={techStackDetails.python} title="Python" alt="" />
							<img src={techStackDetails.unix} title="Unix" alt="" />
							<img src={techStackDetails.linux} title="Linux" className="dark:bg-white rounded-md" alt="" />
							<img src={techStackDetails.wordpress} title="Wordpress" alt="" />
						</section>
					</section>

					<section>
						<h4 className="text-md dark-text dark:light-text md:text-xl xl:leading-tight font-bold opacity-70">Tools</h4>
						<section className="tech flex flex-wrap items-center gap-5 pt-2 mb-[50px]">
							<img src={vscode} title="Visual Studio Code" alt="" />
							<img src={git} title="Git" alt="Git" />
							<img src={github} title="Github" alt="Github" className="dark:bg-white rounded-md " />
							<img src={figma} title="Figma" alt="Figma" />
							<img src={techStackDetails.yarn} title="yarn" alt="Figma" />
							<img src={npm} title="NPM" alt="NPM" className="bg-white rounded-md" />
							<img src={postman} title="Postman" alt="Postman" />
							<img src={techStackDetails.adobe} title="PremierPro" alt="" />
							<img src={techStackDetails.finalCut} title="FinalCut" alt="" />
							<img src={techStackDetails.photoshop} title="Photoshop" alt="" />
							<img src={techStackDetails.vite} title="Vite" alt="" />
						</section>
					</section>
				</div>
			</main>
		</>
	);
}

export default Technologies;
