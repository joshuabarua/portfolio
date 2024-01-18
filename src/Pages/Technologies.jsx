import React from 'react';
import {techStackDetails} from '../data/details';

function Technologies() {
	const {html, css, js, react, redux, tailwind, vscode, git, github, npm, postman, figma} = techStackDetails;
	return (
		<main className="h-screen w-[90%] flex justify-end items-center pb-[100px]">
			<div className=" w-[55%] overflow-y-auto">
				<h1 className="text-2xl text-left dark-text dark:light-text md:text-1xl xl:text-3xl xl:leading-tight font-bold mt-[150px]">Technologies</h1>
				<section>
					<h4 className="text-md dark-text dark:light-text xl:text-xl xl:leading-tight font-bold pt-5 opacity-70">Frequently Used</h4>
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
					<h4 className="text-md dark-text dark:light-text xl:text-2xl xl:leading-tight font-bold opacity-70">Familiar With</h4>
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
					<h4 className="text-md dark-text dark:light-text xl:text-2xl xl:leading-tight font-bold opacity-70">Tools</h4>
				</section>
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
			</div>
		</main>
	);
}

export default Technologies;
