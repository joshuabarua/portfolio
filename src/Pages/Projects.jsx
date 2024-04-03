import React from 'react';
import Project from '../Components/Project';
import {projectDetails} from '../data/details.js';

function Projects() {
	return (
		<>
			<h1 className="text-2xl dark-text dark:light-text page-title">Projects</h1>
			<main className="h-full w-[100%] flex justify-center items-center flex-col mt-[50px] ">
				<div className="projectCardGrid">{React.Children.toArray(projectDetails.map(({...projectDetails}, idx) => <Project props={projectDetails} idx={idx} />))}</div>
			</main>
		</>
	);
}

export default Projects;
