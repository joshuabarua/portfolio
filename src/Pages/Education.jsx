import React from 'react';
import Work from '../Components/Work';
import {eduDetails} from '../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';

function Education() {
	return (
		<>
			<h1 className="text-2xl dark-text dark:light-text page-title">Education</h1>
			<main className="h-screen w-[100%] flex justify-start items-center flex-col overflow-x-hidden">
				<div className="h-[95%] mx-64 my-24">
					<VerticalTimeline>
						{React.Children.toArray(
							eduDetails.map(({Position, Company, Location, Type, Duration, Tech}) => (
								<Work position={Position} company={Company} location={Location} type={Type} duration={Duration} tech={Tech} />
							))
						)}
					</VerticalTimeline>
				</div>
			</main>
		</>
	);
}

export default Education;
