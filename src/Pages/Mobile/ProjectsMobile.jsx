import React from 'react';
import Project from '../../Components/Project';
import {projectDetails} from '../../data/details.js';

function ProjectsMobile() {
	return (
		<main className="h-screen w-full flex justify-center items-center flex-col my-[20px] py-[20px]">
			<section className="w-[70%] overflow-x-hidden mb-10 ">
				<h1 className="text-xl mt-10 text-center dark-text dark:light-text md:text-3xl xl:text-4xl xl:leading-tight font-bold">Projects</h1>
				{React.Children.toArray(
					projectDetails.map(({title, image, description, techstack, previewLink, githubLink}) => (
						<Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
					))
				)}
			</section>
		</main>
	);
}

export default ProjectsMobile;
