import React from 'react';
import Work from '../Components/Work';
import {workDetails} from '../data/details.js';

function Experience() {
	return (
		<main className="h-screen w-[90%] flex justify-end items-end flex-col overflow-x-hidden ml-[5%]">
			<section className="mr-[5%] overflow-y-auto">
				<h1 className="text-lg text-center pt-12 dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Work Experience</h1>
				<div className="flex flex-col items-center gap-2"></div>
				{React.Children.toArray(
					workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}) => (
						<Work position={Position} description={Description} company={Company} location={Location} type={Type} duration={Duration} website={Website} tech={Tech} />
					))
				)}
			</section>
		</main>
	);
}

export default Experience;
