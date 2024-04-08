import React from 'react';
import Project from '../Components/Project';
import {projectDetails} from '../data/details.js';

function Projects() {
	return (
		<>
			<h1 className="text-md mr-[-1px] md:text-2xl dark-text dark:light-text page-title">Projects</h1>
			<main className="h-screen w-[100%] flex justify-start items-center flex-col mt-[70px] mb-[-102px] pt-10">
				<div className="projectCardGrid">{React.Children.toArray(projectDetails.map(({...projectDetails}, idx) => <Project props={projectDetails} idx={idx} />))}</div>
			</main>
		</>
	);
}

export default Projects;
