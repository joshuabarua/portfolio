import React from 'react';
import Work from '../../Components/Work';
import {eduDetails} from '../../data/details.js';

function Education1440() {
	return (
		<main className="h-screen w-screen flex justify-end items-end flex-col overflow-x-hidden ">
			<section className="mr-[10%] mb-[5%] overflow-y-auto">
				<h1 className="text-4xl text-center dark-text dark:light-text font-bold py-12 overflow-hidden">Education</h1>
				<div className="flex flex-col items-center gap-2 w-[100%]">
					{React.Children.toArray(
						eduDetails.map(({Position, Company, Location, Type, Duration, Tech}) => (
							<Work position={Position} company={Company} location={Location} type={Type} duration={Duration} tech={Tech} />
						))
					)}
				</div>
			</section>
		</main>
	);
}

export default Education1440;
