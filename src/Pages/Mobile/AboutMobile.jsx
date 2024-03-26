import React from 'react';
import {personalDetails} from '../../data/details.js';

function AboutMobile() {
	const {about} = personalDetails;
	return (
		<div className="h-screen w-[100%] flex justify-center items-center flex-col my-[20px] py-[20px] ml-5">
			<h1 className="wrapped-text text-2xl text-dark-text dark:text-light-text page-title">About Me</h1>

			<div className="px-[6rem] flex gap-2 flex-col ">
				<p className="wrapped-text text-dark-text dark:text-light-text text-sm leading-6 md:text-md lg:text-lg  pb-8">{about}</p>
			</div>
		</div>
	);
}

export default AboutMobile;
