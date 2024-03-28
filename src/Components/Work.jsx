import React, {useEffect, useState} from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';

const Icon = ({logo, company}) => (
	<div className="flex justify-center items-center rounded-full pt-[1px] md:pt-[1px]">
		<img src={logo} alt={company} className="rounded-full  sm:w-[38px] sm:h-[38px] md:w-[58px] md:h-[58px]" />
	</div>
);

function Work({props, isDark}) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props === undefined) {
			setLoading(true);
		}
		setLoading(false);
	}, [props]);

	if (loading) {
		return <div>Loading...</div>;
	}

	const {Position, Description, Company, Location, Type, Duration, Website, Tech, Color, Logo} = props;

	console.log(props);
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work "
			contentStyle={
				isDark
					? {background: '#1f2020e7', Color: '#e8dada', borderRadius: '3%', boxShadow: `0 3px 0 ${Color}`, minWidth: '325px'}
					: {background: '#eaedf0e7', Color: '#111111', borderRadius: '3%', boxShadow: `0 3px 0 ${Color}`, minWidth: '325px'}
			}
			contentArrowStyle={{borderRight: isDark ? '10px solid #1f2020e7' : '10px solid #eaedf0e7', top: '1.5rem'}}
			date={Duration}
			iconStyle={{
				background: 'rgb(240, 228, 228)',
				top: '10px',
				boxShadow: `0 0 0 3px ${Color}`,
			}}
			icon={<Icon logo={Logo} company={Company} />}>
			<div className="flex flex-col gap-2">
				<div className={`w-full flex justify-between gap-4 ${Company.length > 30 ? 'flex-col' : ''}`}>
					<h1 className={`vertical-timeline-element-title wrapped-text ${Company.length > 30 ? 'w-full' : 'w-1/2'}`}>
						<a href={Website ? Website : ''}>{Company}</a>
					</h1>

					<h1 className={`vertical-timeline-element-subtitle wrapped-text ${Position.length > 30 ? 'text-left' : 'text-right'}`}>{Position}</h1>
				</div>
				<div className="w-full flex justify-between">
					<h1 className="vertical-timeline-element-subtitle">{Location}</h1>
					<div className="not-scrollable btn bg-green-bg text-green-text text-sm rounded-3xl min-w-[80px] max-w-[90px] h-[20px] flex justify-center items-center">
						<h5 className="mt-1">{Type}</h5>
					</div>
				</div>

				<h4 className="wrapped-text text-xs leading-4 md:text-base font-light ">{Description}</h4>

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
