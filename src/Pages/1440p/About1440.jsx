import React from 'react';
import {personalDetails} from '../../data/details.js';

function About1440() {
	return (
		<div className="h-screen w-[100%] flex justify-end items-end flex-col about">
			<div className=" w-[50%] h-{100%} min-w-[250px] max-w-[500px] overflow-y-auto mb-[10%] mr-[10%]">
				<h1 className="wrapped-text text-left text-dark-text dark:text-light-text text-6xl xl:leading-tight font-bold">About Me</h1>
				<p className="wrapped-text text-dark-text dark:text-light-text text-3xl leading-10 ">{personalDetails.about}</p>
			</div>
		</div>
	);
}

export default About1440;
