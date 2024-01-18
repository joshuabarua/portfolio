import React from 'react';
import Work from '../../Components/Work';
import {workDetails} from '../../Details';

function ExperienceMobile() {
	return (
		<main className="h-screen w-full overflow-y-auto flex flex-col justify-center items-center  ">
			<section className="w-[70%] overflow-x-hidden ">
				<div className="">
					<h1 className="text-xl text-center pb-8 mt-[40px] dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Work Experience</h1>
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

export default ExperienceMobile;
