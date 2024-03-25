import React from 'react';
import Work from '../Components/Work';
import {workDetails} from '../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
	return (
		<>
			<h1 className="page-title text-2xl dark-text dark:light-text">Experience</h1>
			<main className="h-screen w-[100%] flex justify-start items-center flex-col ">
				<div className="mx-48 h-full pt-4">
					<VerticalTimeline>
						{React.Children.toArray(
							workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}, idx) => (
								<Work
									position={Position}
									description={Description}
									company={Company}
									location={Location}
									type={Type}
									duration={Duration}
									website={Website}
									tech={Tech}
									key={idx}
									index={idx}
								/>
							))
						)}
					</VerticalTimeline>
				</div>
			</main>
		</>
	);
}

export default Experience;
