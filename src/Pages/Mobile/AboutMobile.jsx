import React from 'react';
import {personalDetails} from '../../Details';

function AboutMobile() {
	const {name, tagline, about} = personalDetails;
	return (
		<div className="h-screen w-[100%] flex justify-center items-center flex-col ">
			<div className=" ">
				<h1 className="wrapped-text  text-dark-text dark:text-light-text text-3xl ">{name}</h1>
				<h2 className="wrapped-text text-dark-text dark:text-light-text text-lg ">{tagline}</h2>
			</div>
			<div className=" w-[70%]  max-w-[350px] pt-[80px] overflow-y-auto mb-[50px] flex gap-5 flex-col">
				<h1 className="wrapped-text text-center text-2xl text-dark-text dark:text-light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">About Me</h1>
				<p className="wrapped-text text-dark-text dark:text-light-text text-sm leading-6 md:text-md lg:text-lg">{about}</p>
			</div>
		</div>
	);
}

export default AboutMobile;
