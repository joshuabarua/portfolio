import React, {useContext} from 'react';
import Work from '../Components/Work';
import {workDetails} from '../data/details.js';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {isDarkMode} from '../hooks/useColorScheme.jsx';
import Spacer from '../Components/Spacer.jsx';

function Experience() {
	const isDark = useContext(isDarkMode);
	return (
		<>
			<h1 className="page-title text-md mr-[-2px] md:mr-[-1px] md:text-2xl dark-text dark:light-text">Experience</h1>
			<main className="w-[100%] flex justify-start items-center flex-col scroll-smooths">
				<div className="md:mx-48 h-full pt-4 mt-4 ">
					<VerticalTimeline lineColor={isDark ? '#f2f2f2' : '#1a1a1a'}>
						{React.Children.toArray(workDetails.map(({...workDetails}, idx) => <Work props={workDetails} key={idx} isDark={isDark} />))}
					</VerticalTimeline>
					<Spacer size={100} axis={'vertical'} />
				</div>
			</main>
		</>
	);
}

export default Experience;
