import React from 'react';
import Project from '../../Components/Project';
import {projectDetails} from '../../data/details.js';

function ProjectsMobile() {
	return (
		<main className="h-screen w-full flex justify-center items-center flex-col my-[2rem] py-[20px]">
			<h1 className="text-2xl dark-text dark:light-text page-title">Projects</h1>
			{React.Children.toArray(
				projectDetails.map(({title, image, description, techstack, previewLink, githubLink}) => (
					<Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
				))
			)}
		</main>
	);
}

export default ProjectsMobile;
