import React from 'react';
import Work from '../../Components/Work';
import {eduDetails} from '../../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import {isDarkMode} from '../../hooks/useColorScheme.jsx';

function EducationMobile() {
	const isDark = isDarkMode();

	return (
		<main className="h-screen w-[100%] flex justify-start items-center flex-col px-16 mt-8 mb-[-35px] ">
			<h1 className="text-2xl dark-text dark:light-text page-title">Education</h1>
			<VerticalTimeline>
				{eduDetails.map(({...eduDetails}) => (
					<Work props={eduDetails} isDark={isDark} />
				))}
			</VerticalTimeline>
		</main>
	);
}

export default EducationMobile;
