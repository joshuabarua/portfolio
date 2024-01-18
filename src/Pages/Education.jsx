import React from 'react';
import Work from '../Components/Work';
import {eduDetails} from '../data/details';

function Education() {
	return (
		<main className="h-screen w-[100%] flex justify-end items-end flex-col pr-[20px] overflow-x-hidden">
			<section className=" w-[60%] overflow-y-auto pb-1 pr-6">
				<h1 className="text-lg mt-[150px] dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Education</h1>
				{React.Children.toArray(
					eduDetails.map(({Position, Company, Location, Type, Duration, Tech}) => (
						<Work position={Position} company={Company} location={Location} type={Type} duration={Duration} tech={Tech} />
					))
				)}
			</section>
		</main>
	);
}

export default Education;
