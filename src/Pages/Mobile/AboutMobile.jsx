import React from 'react';
import {personalDetails} from '../../data/Details.js';

function AboutMobile() {
	const {about} = personalDetails;
	return (
		<>
			<h1 className="wrapped-text text-md md:text-2xl text-dark-text dark:text-light-text page-title">About Me</h1>
			<div className="w-full flex items-end flex-col-reverse mb-[30%] h-xs:mb-[30%] h-sm:mb-[45%] h-md:mb-[50%] sm:mb-[45%] overflow-y-hidden">
				<div className="flex items-end flex-col-reverse w-5/6 overflow-hidden ">
					<p className="wrapped-text text-dark-text backdrop-opacity-30 backdrop-blur-xl dark:text-light-text text-xs pr-4 leading-tight h-md:text-base sm:text-sm md:text-base pb-18 sm:pr-16">
						{about}
					</p>
				</div>
			</div>
		</>
	);
}

export default AboutMobile;
