import React from 'react';
import {personalDetails} from '../../data/details.js';

function AboutMobile() {
	const {about} = personalDetails;
	return (
		<>
			<h1 className="wrapped-text text-md mr-[-1px] md:text-2xl text-dark-text dark:text-light-text page-title">About Me</h1>
			<div className="w-[100%] flex items-end flex-col-reverse">
				<div className="flex items-end flex-col-reverse w-5/6 ">
					<p className="wrapped-text text-dark-text backdrop-opacity-30 backdrop-blur-xl dark:text-light-text text-sm leading-tight sm:text-lg pb-4 pr-4">{about}</p>
				</div>
			</div>
		</>
	);
}

export default AboutMobile;
