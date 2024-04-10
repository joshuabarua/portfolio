import React from 'react';
import {personalDetails} from '../data/details.js';

function About() {
	return (
		<>
			<h1 className="wrapped-text text-2xl text-dark-text dark:text-light-text page-title">About Me</h1>
			<div className="w-[100%] flex justify-end items-end flex-col about">
				<div className="flex items-end flex-col-reverse mb-[10%] w-1/2">
					<p className="wrapped-text text-dark-text dark:text-light-text text-xl leading-7 md:text-md ">{personalDetails.about}</p>
				</div>
			</div>
		</>
	);
}

export default About;
