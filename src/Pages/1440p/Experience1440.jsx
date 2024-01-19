import React from 'react';
import Work from '../../Components/Work';
import {workDetails} from '../../data/details';

function Experience1440() {
	return (
		<main className="h-screen w-[90%] flex justify-end items-end flex-col overflow-x-hidden ">
			<section className="mr-[5%] overflow-y-auto">
				<h1 className="text-4xl text-center dark-text dark:light-text font-bold py-12 overflow-hidden">Work Experience</h1>
				<div className="flex flex-col items-center gap-2">
					{React.Children.toArray(
						workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}) => (
							<Work position={Position} description={Description} company={Company} location={Location} type={Type} duration={Duration} website={Website} tech={Tech} />
						))
					)}
				</div>
			</section>
		</main>
	);
}

export default Experience1440;
