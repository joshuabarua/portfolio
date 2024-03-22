import React from 'react';
import {personalDetails} from '../data/details.js';

function About() {
	return (
		<>
			<h1 className="wrapped-text text-2xl text-dark-text dark:text-light-text page-title">About Me</h1>
			<div className="h-screen w-[100%] flex justify-end items-end flex-col about">
				<div className="w-[50%] min-w-[250px] max-w-[350px] overflow-y-auto mb-[8%] mr-[5%]">
					<p className="wrapped-text text-dark-text dark:text-light-text text-xl leading-7 md:text-md ">{personalDetails.about}</p>
				</div>
			</div>
		</>
	);
}

export default About;
