import React from 'react';
import Project from '../Components/Project';
import {projectDetails} from '../data/details.js';
import Spacer from '../Components/Spacer.jsx';

function Projects() {
	return (
		<>
			<h1 className="text-md mr-[-1px] md:text-2xl dark-text dark:light-text page-title">Projects</h1>
			<main className="w-full flex justify-start items-center flex-col gap-18 overflow-x-hidden scroll-smooth">
				<div className="projectCardGrid">{React.Children.toArray(projectDetails.map(({...projectDetails}, idx) => <Project props={projectDetails} idx={idx} />))}</div>
				<Spacer size={100} axis={'vertical'} />
			</main>
		</>
	);
}

export default Projects;
