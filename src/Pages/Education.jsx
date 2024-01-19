import React from 'react';
import Work from '../Components/Work';
import {eduDetails} from '../data/details';

function Education() {
	return (
		<main className="h-screen w-[100%] flex justify-end items-end flex-col overflow-x-hidden">
			<section className="mx-[5%] mb-[5%] overflow-y-auto">
				<h1 className="text-lg text-center mt-[150px] dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Education</h1>
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

export default Education;
