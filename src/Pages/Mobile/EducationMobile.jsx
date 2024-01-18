import React from 'react';
import Work from '../../Components/Work';
import {eduDetails} from '../../Details';

function EducationMobile() {
	return (
		<main className="h-screen w-[100%] flex justify-center items-center flex-col overflow-x-hidden">
			<section className=" w-[70%] overflow-y-auto ">
				<h1 className="text-xl text-center pb-8 mt-10 dark-text dark:light-text md:text-2xl xl:text-3xl xl:leading-tight font-bold">Education</h1>
				{React.Children.toArray(
					eduDetails.map(({Position, Company, Location, Type, Duration, Tech}) => (
						<Work position={Position} company={Company} location={Location} type={Type} duration={Duration} tech={Tech} />
					))
				)}
			</section>
		</main>
	);
}

export default EducationMobile;
