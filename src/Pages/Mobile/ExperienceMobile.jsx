import React from 'react';
import Work from '../../Components/Work';
import {workDetails} from '../../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';

function ExperienceMobile() {
	return (
		<>
			<h1 className="page-title text-2xl dark-text dark:light-text">Experience</h1>
			<main className="h-screen w-full flex flex-col justify-start items-center  px-16 mt-8 mb-[-35px]">
				<VerticalTimeline>
					{React.Children.toArray(
						workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}) => (
							<Work position={Position} description={Description} company={Company} location={Location} type={Type} duration={Duration} website={Website} tech={Tech} />
						))
					)}
				</VerticalTimeline>
			</main>
		</>
	);
}

export default ExperienceMobile;
