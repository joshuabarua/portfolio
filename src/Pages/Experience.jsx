import React from 'react';
import Work from '../Components/Work';
import {workDetails} from '../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {isDarkMode} from '../hooks/useColorScheme.jsx';

function Experience() {
	const isDark = isDarkMode();
	return (
		<>
			<h1 className="page-title text-2xl dark-text dark:light-text">Experience</h1>
			<main className="h-screen w-[100%] flex justify-start items-center flex-col mb-[-30px]">
				<div className="mx-48 h-full pt-4 mt-4 ">
					<VerticalTimeline lineColor={isDark ? '#f2f2f2' : '#1a1a1a'}>
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
									isDark={isDark}
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
