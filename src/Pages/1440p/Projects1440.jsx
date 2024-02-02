import React from 'react';
import Project from '../../Components/Project';
import {projectDetails} from '../../data/details.js';

function Projects1440() {
	return (
		<main className="h-screen w-[90%]  flex justify-end items-end flex-col">
			<section className="w-[50%]">
				<h1 className=" mt-10 text-center dark-text dark:light-text text-4xl xl:leading-tight font-bold">Projects</h1>
				<div className=" mb-[10%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-2 md:pr-0">
					{React.Children.toArray(
						projectDetails.map(({title, image, description, techstack, previewLink, githubLink}) => (
							<Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
						))
					)}
				</div>
			</section>
		</main>
	);
}

export default Projects1440;
