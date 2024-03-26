import React from 'react';
import Work from '../../Components/Work';
import {eduDetails} from '../../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';

function EducationMobile() {
	return (
		<main className="h-screen w-[100%] flex justify-start items-center flex-col px-16 mt-8 mb-[-35px] ">
			<h1 className="text-2xl dark-text dark:light-text page-title">Education</h1>
			<VerticalTimeline>
				{React.Children.toArray(
					eduDetails.map(({Position, Company, Location, Type, Duration, Tech}) => (
						<Work position={Position} company={Company} location={Location} type={Type} duration={Duration} tech={Tech} />
					))
				)}
			</VerticalTimeline>
		</main>
	);
}

export default EducationMobile;
