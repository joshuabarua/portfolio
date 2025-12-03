import React from 'react';
import {projectDetails} from '../data/Details.js';
import Project from '../Components/Project';

const projectCards = projectDetails.map((project, idx) => <Project key={idx} props={project} idx={idx} />);

function Projects() {
	return (
		<div className="projects">
			<h1 className="page-title text-md mr-[-2px] md:mr-[-1px] md:text-2xl dark-text dark:light-text">
				Personal Projects
			</h1>
			<div className="projectCardGrid">{projectCards}</div>
		</div>
	);
}

export default Projects;
