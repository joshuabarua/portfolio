import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';

const Icon = () => <></>;

function Work({position, description, company, location, type, duration, website, tech, isDark}) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work "
			contentStyle={
				isDark
					? {background: '#1f2020e7', color: '#e8dada', borderRadius: '3%', boxShadow: '0 3px 0 #2c2929', minWidth: '325px'}
					: {background: '#eaedf0e7', color: '#111111', borderRadius: '3%', minWidth: '325px'}
			}
			contentArrowStyle={{borderRight: isDark ? '10px solid #1f2020e7' : '10px solid #eaedf0e7', top: '1.5rem'}}
			date={duration}
			iconStyle={{
				background: 'rgb(220, 45, 45)',
				top: '10px',
				boxShadow: isDark
					? '0 0 0 2px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)'
					: '0 0 0 2px #0c0b0b,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
			}}
			icon={<Icon />}>
			<div className="flex flex-col gap-2">
				<div className={`w-full flex justify-between gap-4 ${company.length > 30 ? 'flex-col' : ''}`}>
					<h1 className={`vertical-timeline-element-title wrapped-text ${company.length > 30 ? 'w-full' : 'w-1/2'}`}>
						<a href={website ? website : ''}>{company}</a>
					</h1>

					<h1 className={`vertical-timeline-element-subtitle wrapped-text ${position.length > 30 ? 'text-left' : 'text-right'}`}>{position}</h1>
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
