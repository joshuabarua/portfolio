import React from 'react';
import {personalDetails} from '../../data/details.js';

function AboutMobile() {
	const {name, tagline, about} = personalDetails;
	return (
		<div className="h-screen w-[100%] flex justify-center items-center flex-col my-[20px] py-[20px] ml-5">
			<div className="w-[70%] overflow-y-hidden h-[100px]">
				<h1 className=" pt-10 wrapped-text  text-dark-text dark:text-light-text text-xl overflow-y-hidden">{name}</h1>
				<h2 className="wrapped-text text-dark-text dark:text-light-text text-md overflow-y-hidden">{tagline}</h2>
			</div>
			<div className=" w-[70%] pt-[20px] flex gap-2 flex-col ">
				<h1 className="wrapped-text text-center text-lg text-dark-text dark:text-light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold overflow-y-hidden  h-6">
					About Me
				</h1>
				<p className="wrapped-text text-dark-text dark:text-light-text text-sm leading-6 md:text-md lg:text-lg  pb-8">{about}</p>
			</div>
		</div>
	);
}

export default AboutMobile;
