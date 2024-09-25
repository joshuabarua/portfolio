import React, {useMemo} from 'react';
import {projectDetails} from '../data/details.js';
import Project from '../Components/Project';

function Projects() {
	// ... existing code ...

	const projectCards = useMemo(() => {
		return projectDetails.map((projectDetails, idx) => <Project key={idx} props={projectDetails} idx={idx} />);
	}, [projectDetails]);

	return (
		<div className="projects">
			<h1 className="page-title">Projects</h1>
			<div className="projectCardGrid">{projectCards}</div>
		</div>
	);
}

export default Projects;
