import React from 'react';
import {personalDetails} from '../data/Details.js';
import PageTitle from '../Components/PageTitle';

function About() {
	return (
		<>
			<PageTitle className="wrapped-text text-2xl text-dark-text dark:text-light-heading mr-[-1px]">About Me</PageTitle>
			<div className="w-[100%] flex justify-end items-end flex-col about">
				<div className="flex items-end flex-col-reverse mb-[10%] w-1/2">
					<p className="wrapped-text text-dark-heading  dark:text-light-heading text-xl leading-7 md:text-md personalDetails">{personalDetails.about}</p>
				</div>
			</div>
		</>
	);
}

export default About;
