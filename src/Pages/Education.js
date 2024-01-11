import React from 'react';
import Work from '../Components/Work';
import {eduDetails} from '../Details';

function Education() {
	return (
		<main className="h-screen w-[100%] flex justify-end items-end flex-col pr-[20px]">
			<section className=" w-[60%] overflow-y-auto pb-1 pr-6">
				<h1 className="text-3xl mt-[150px] text-dark-heading dark:text-light-heading md:text-2xl xl:text-4xl xl:leading-tight font-bold">Education</h1>
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
