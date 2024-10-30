import React, {useMemo} from 'react';
import {projectDetails} from '../data/details.js';
import Project from '../Components/Project';

function Projects() {
	const projectCards = useMemo(() => {
		return projectDetails.map((projectDetails, idx) => <Project key={idx} props={projectDetails} idx={idx} />);
	}, [projectDetails]);

	return (
		<div className="projects">
			<h1 className="page-title text-md mr-[-2px] md:mr-[-1px] md:text-2xl dark-text dark:light-text">Personal Projects</h1>
			<div className="projectCardGrid">{projectCards}</div>
		</div>
	);
}

export default Projects;
