import React from 'react';
import {personalDetails} from '../Details';

function Home() {
	return (
		<div className="h-screen w-[100%] flex justify-end items-end flex-col ">
			<div className=" w-[50%]  min-w-[250px] max-w-[350px] overflow-y-auto pb-[50px] pr-[50px]">
				<h1 className="wrapped-text text-left text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">About Me</h1>
				<p className="wrapped-text text-sm leading-6 md:text-md lg:text-xl">{personalDetails.about}</p>
			</div>
		</div>
	);
}

export default Home;
