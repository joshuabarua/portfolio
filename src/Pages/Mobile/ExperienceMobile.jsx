import React from 'react';
import Work from '../../Components/Work';
import {workDetails} from '../../Details';

function ExperienceMobile() {
	return (
		<main className="h-screen w-[100%] flex justify-center items-center flex-col overflow-x-hidden ">
			<section className="w-[80%] overflow-y-auto mb-10">
				<h1 className="text-lg text-center pb-8 mt-[100px] dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Work Experience</h1>
				{React.Children.toArray(
					workDetails.map(({Position, Description, Company, Location, Type, Duration, Website, Tech}) => (
						<Work position={Position} description={Description} company={Company} location={Location} type={Type} duration={Duration} website={Website} tech={Tech} />
					))
				)}
			</section>
		</main>
	);
}

export default ExperienceMobile;
