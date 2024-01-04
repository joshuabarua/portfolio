import React from 'react';
import {personalDetails} from '../Details';

function Home() {
	return (
		<div className="h-screen w-[100%] flex justify-end items-end flex-col">
			<div className=" w-[50%] overflow-y-auto pb-[100px] pr-[100px]">
				<h1 className="wrapped-text text-left text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">About Me</h1>
				<p className="wrapped-text">{personalDetails.about}</p>
			</div>
		</div>
	);
}

export default Home;
