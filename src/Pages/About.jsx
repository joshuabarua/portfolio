import React from 'react';
import {personalDetails} from '../data/details';

function About() {
	return (
		<div className="h-screen w-[100%] flex justify-end items-end flex-col ">
			<div className=" w-[50%] min-w-[250px] max-w-[350px] overflow-y-auto mb-[60px] mr-[50px]">
				<h1 className="wrapped-text text-left text-2xl text-dark-text dark:text-light-text md:text-3xl xl:text-4xl xl:leading-tight font-bold">About Me</h1>
				<p className="wrapped-text text-dark-text dark:text-light-text text-sm leading-6 md:text-md lg:text-lg">{personalDetails.about}</p>
			</div>
		</div>
	);
}

export default About;
