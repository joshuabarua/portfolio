import React from 'react';
import {projectDetails} from '../data/Details.js';
import Project from '../Components/Project';
import PageTitle from '../Components/PageTitle';

const projectCards = projectDetails.map((project, idx) => <Project key={idx} props={project} idx={idx} />);

function Projects() {
	return (
		<div className="projects">
			<PageTitle className="text-md mr-[-2px] md:mr-[-1px] md:text-2xl dark-text dark:light-text">Personal Projects</PageTitle>
			<div className="projectCardGrid">{projectCards}</div>
		</div>
	);
}

export default Projects;
