import React from 'react';
import Work from '../Components/Work';
import {eduDetails} from '../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import {isDarkMode} from '../hooks/useColorScheme.jsx';

function Education() {
	const isDark = isDarkMode();

	return (
		<>
			<h1 className="text-md mr-[-1px] md:text-2xl dark-text dark:light-text page-title">Education</h1>
			<main className="h-screen w-[100%] flex justify-center items-center flex-col mb-[-30px]">
				<div className="h-full md:mx-48 pt-4 mt-4">
					<VerticalTimeline lineColor={isDark ? '#f2f2f2' : '#1a1a1a'}>
						{eduDetails.map(({...eduDetails}, idx) => (
							<Work props={eduDetails} isDark={isDark} key={idx} />
						))}
					</VerticalTimeline>
				</div>
			</main>
		</>
	);
}

export default Education;
