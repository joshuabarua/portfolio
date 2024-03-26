import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';

const WorkIcon = () => <></>;

function Work({position, description, company, location, type, duration, website, tech, index}) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{background: 'rgba(33, 149, 243, 0.113)', color: '#e8dada', borderRadius: '3%'}}
			contentArrowStyle={{borderRight: '10px solid  rgb(253, 253, 253)', top: '35px'}}
			date={duration}
			iconStyle={{background: 'rgb(255, 239, 239)', color: '#fff', top: '10px'}}
			icon={<WorkIcon />}>
			<div className="flex flex-col gap-2">
				<div className="w-full flex justify-between">
					<h1 className="vertical-timeline-element-title wrapped-text">
						<a href={website ? website : ''}>{company}</a>
					</h1>
					<h1 className="vertical-timeline-element-subtitle wrapped-text">{position}</h1>
				</div>
				<div className="w-full flex justify-between">
					<h1 className="vertical-timeline-element-subtitle">{location}</h1>
					<div className="not-scrollable btn bg-green-bg text-green-text text-sm rounded-3xl min-w-[80px] max-w-[90px] h-[20px] flex justify-center items-center">
						<h5 className="mt-1">{type}</h5>
					</div>
				</div>

				<h4 className="wrapped-text text-xs leading-4 md:text-base font-light ">{description}</h4>

				<div className="workImg not-scrollable flex flex-wrap justify-around items-baseline w-full gap-1 pb-2">
					{tech ? (
						tech.map((item, idx) => {
							return <img src={item} className="w-[30px]" alt="" key={idx} />;
						})
					) : (
						<></>
					)}
				</div>
			</div>
		</VerticalTimelineElement>
	);
}

export default Work;
