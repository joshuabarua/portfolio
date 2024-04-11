import React, {useContext} from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import {AppContext} from '../context/AppContext.jsx';

const Icon = ({logo, company}) => (
	<div className="flex justify-center items-center rounded-full pt-[1px]">
		<img src={logo} alt={company} className="rounded-full  w-[38px] h-[38px] w-vtl:w-[58px] w-vtl:h-[58px]" />
	</div>
);

function Work({props}) {
	const {Position, Description, Company, Location, Type, Duration, Website, Tech, Color, Logo} = props;

	const {contentStyle, isDark} = useContext(AppContext);

	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work "
			contentStyle={{...contentStyle, boxShadow: `0 3px 0 ${Color}`}}
			contentArrowStyle={{borderRight: isDark ? '10px solid #1f2020e7' : '10px solid #eaedf0e7', top: '1.5rem'}}
			date={Duration}
			iconStyle={{
				background: 'rgb(240, 228, 228)',
				top: '10px',
				boxShadow: `0 0 0 3px ${Color}`,
			}}
			icon={<Icon logo={Logo} company={Company} />}>
			<div className="flex flex-col justify-center items-center gap-2 w-[175px] md:w-full">
				<div className="w-full grid grid-cols-4 grid-rows-auto gap-x-4 gap-y-[1px] md:gap-y-0 justify-items-start items-baseline">
					<h1 className={`vertical-timeline-element-title wrapped-text text-sm md:text-base col-span-4 md:col-span-2`}>
						<a href={Website ? Website : ''}>{Company}</a>
					</h1>
					<h1 className={`vertical-timeline-element-subtitle wrapped-text text-sm md:text-base col-span-4 md:col-span-2 `}>{Position}</h1>
					<h1 className="vertical-timeline-element-subtitle text-sm md:text-base col-span-4 md:col-span-2">{Location}</h1>
					<div className="not-scrollable btn bg-green-bg text-green-text text-xs md:text-sm rounded-3xl min-w-[80px] max-w-[90px] h-[20px] flex justify-center items-center col-span-4 md:col-span-2">
						<h5 className="mt-1">{Type}</h5>
					</div>
				</div>

				<h4 lang="en" className="wrapped-text break-word hyphens-auto text-xs leading-4 md:text-base font-light ">
					{Description}
				</h4>

				<div className="workImg not-scrollable flex flex-wrap justify-around items-baseline w-full gap-1 pb-2">
					{Tech ? (
						Tech.map((item, idx) => {
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
