import React from 'react';
import {personalDetails} from '../../data/Details';

function AboutMobile() {
	const {name, tagline, about} = personalDetails;
	return (
		<div className="h-screen w-[100%] flex justify-center items-center flex-col overflow-y-auto my-3">
			<div className="w-[70%]  overflow-y-hidden">
				<h1 className=" pt-10 wrapped-text  text-dark-text dark:text-light-text text-xl ">{name}</h1>
				<h2 className="wrapped-text text-dark-text dark:text-light-text text-md ">{tagline}</h2>
			</div>
			<div className=" w-[70%] pt-[20px] flex gap-2 flex-col overflow-y-auto">
				<h1 className="wrapped-text text-center text-lg text-dark-text dark:text-light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold  ">About Me</h1>
				<p className="wrapped-text text-dark-text dark:text-light-text text-sm leading-6 md:text-md lg:text-lg  ">{about}</p>
			</div>
		</div>
	);
}

export default AboutMobile;
