import React from 'react';
import {techStackDetails} from '../Details';

function Technologies() {
	const {html, css, js, react, redux, tailwind, vscode, git, github, npm, postman, figma} = techStackDetails;
	return (
		<main className="overflow-y-auto max-width pt-10 pb-40 ">
			<section>
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Technology</h1>
			</section>
			<section className="tech grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
				<img src={techStackDetails.ts} title="Typescript" alt="" />
				<img src={js} title="JavaScript" alt="" />
				<img src={react} title="React" alt="" />
				<img src={redux} title="Redux" alt="" />
				<img src={techStackDetails.graphql} title="GraphQL" alt="" />
				<img src={techStackDetails.mongo} title="MongoDB" alt="" />
				<img src={techStackDetails.node} title="NodeJS" alt="" />
				<img src={html} title="html" alt="" />
				<img src={css} title="CSS" alt="" />
				<img src={tailwind} title="Tailwind CSS" alt="" />
				<img src={techStackDetails.mui} title="Material UI" alt="" />
				<img src={techStackDetails.styled} title="Styled Components" alt="" />
				<img src={techStackDetails.jwt} title="JWT" alt="" />
				<img src={techStackDetails.express} title="Express" alt="" style={{background: 'white', borderRadius: '50%'}} />
				<img src={techStackDetails.firebase} title="Firebase" alt="" />
				<img src={techStackDetails.json} title="JSON" alt="" />
				<img src={techStackDetails.java} title="Java" alt="" />
				<img src={techStackDetails.sql} title="MySQL" alt="" />
				<img src={techStackDetails.php} title="PHP" alt="" />
				<img src={techStackDetails.ruby} title="Ruby" alt="" />
				<img src={techStackDetails.swift} title="Swift" alt="" />
				<img src={techStackDetails.python} title="Python" alt="" />
				<img src={techStackDetails.unix} title="Unix" alt="" />
				<img src={techStackDetails.linux} title="Linux" alt="" />
				<img src={techStackDetails.wordpress} title="Wordpress" alt="" />
			</section>
			<section>
				<h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Tools</h1>
			</section>
			<section className="tech grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
				<img src={vscode} title="Visual Studio Code" alt="" />
				<img src={git} title="Git" alt="Git" />
				<img src={github} title="Github" alt="Github" />
				<img src={figma} title="Figma" alt="Figma" />
				<img src={npm} title="NPM" alt="NPM" />
				<img src={postman} title="Postman" alt="Postman" />
				<img src={techStackDetails.adobe} title="PremierPro" alt="" />
				<img src={techStackDetails.finalCut} title="FinalCut" alt="" />
				<img src={techStackDetails.photoshop} title="Photoshop" alt="" />
			</section>
		</main>
	);
}

export default Technologies;
