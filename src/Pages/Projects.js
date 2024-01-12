import React from 'react';
import Project from '../Components/Project';
import {projectDetails} from '../Details';

function Projects() {
	return (
		<main className="h-screen w-[90%] mt-[200px] flex justify-start items-end flex-col">
			<section className="w-[70%]">
				<h1 className="text-1xl text-left dark-text dark:light-text md:text-3xl xl:text-4xl xl:leading-tight font-bold">Projects</h1>
				<div className=" mb-[350px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-2">
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

export default Projects;
