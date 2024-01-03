import React from 'react';
import Work from '../Components/Work';
import {personalDetails, workDetails, eduDetails} from '../Details';

function Home() {
	return (
		<div className="flex justify-end items-end max-w-md">
			<div className="flex flex-col">
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">About Me</h1>
				{personalDetails.about}
			</div>
		</div>
	);
}

export default Home;
