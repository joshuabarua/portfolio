import React from 'react';
import Work from '../Components/Work';
import {workDetails} from '../Details';

function Experience() {
	return (
		<main className="h-screen w-[90%] flex justify-end items-end flex-col ">
			<section className="w-[60%] overflow-y-auto pr-5 mb-[5px]">
				<h1 className="text-md text-left text-dark-heading mt-[150px] dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold">Work Experience</h1>
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
