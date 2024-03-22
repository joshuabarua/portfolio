import React from 'react';
import Work from '../Components/Work';
import {workDetails} from '../data/details.js';

function Experience() {
	return (
		<>
			<h1 className="page-title text-2xl dark-text dark:light-text ">Experience</h1>
			<main className="h-screen w-[90%] flex justify-end items-end flex-col overflow-x-hidden ml-[5%] ">
				<section className="mr-[5%] overflow-y-auto extraSpace">
					<div className="flex flex-col items-end  gap-2 pt-14 ">
						{React.Children.toArray(
							workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}) => (
								<Work position={Position} description={Description} company={Company} location={Location} type={Type} duration={Duration} website={Website} tech={Tech} />
							))
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export default Experience;
