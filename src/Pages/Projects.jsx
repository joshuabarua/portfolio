import React from 'react';
import Project from '../Components/Project';
import {projectDetails} from '../data/details.js';

function Projects() {
	return (
		<>
			<h1 className="text-2xl  dark-text dark:light-text page-title">Projects</h1>
			<main className="h-screen w-[100%] flex justify-start items-end flex-col mt-[31px]">
				<section className="w-[70%] mb-[31px]">
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 mr-[2.5rem]  md:pr-0 ">
						{React.Children.toArray(
							projectDetails.map(({title, image, description, techstack, previewLink, githubLink}) => (
								<Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
							))
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export default Projects;
