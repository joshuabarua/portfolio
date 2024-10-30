import React, {useContext} from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import {AppContext} from '../context/AppContext.jsx';

const Icon = ({logo, company}) => (
	<div className="flex justify-center items-center rounded-full pt-[1px]">
		<img src={logo} alt={company} loading="lazy" decoding="async" className="rounded-full  w-[38px] h-[38px] w-vtl:w-[58px] w-vtl:h-[58px]" />
	</div>
);

function Work({props}) {
	const {Position, Description, Company, Location, Type, Duration, Website, GitHub, Tech, Color, Logo} = props;

	const {contentStyle, isDark} = useContext(AppContext);

	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work hover:scale-[103%] duration-300"
			contentStyle={{...contentStyle, boxShadow: `0 3px 0 ${Color}`}}
			contentArrowStyle={{borderRight: isDark ? '10px solid #1f2020e7' : '10px solid #eaedf0e7', top: '1.5rem'}}
			date={Duration}
			iconStyle={{
				background: 'rgb(240, 228, 228)',
				top: '10px',
				boxShadow: `0 0 0 3px ${Color}`,
			}}
			icon={<Icon logo={Logo} company={Company} />}>
			<div className="absolute top-2 right-2 flex gap-2">
				{GitHub && (
					<a href={GitHub} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
				)}
				{Website && (
					<a href={Website} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
				)}
			</div>
			<div className="flex flex-col justify-center items-center gap-2 w-[175px] md:w-full">
				<div className="w-full grid grid-cols-4 grid-rows-auto gap-x-4 gap-y-[1px] md:gap-y-0 justify-items-start items-baseline">
					{Website ? (
						<h1 className={`vertical-timeline-element-title wrapped-text text-sm md:text-base col-span-4 md:col-span-2 hover:underline`}>
							<a href={Website}>{Company}</a>
						</h1>
					) : (
						<h1 className={`vertical-timeline-element-title wrapped-text text-sm md:text-base col-span-4 md:col-span-2 `}>{Company}</h1>
					)}

					<h1 className={`vertical-timeline-element-subtitle wrapped-text text-sm md:text-base col-span-4 md:col-span-2 `}>{Position}</h1>
					<h1 className="vertical-timeline-element-subtitle text-sm md:text-base col-span-4 md:col-span-2">{Location}</h1>
					<div className="not-scrollable btn bg-green-bg text-green-text text-xs md:text-sm rounded-3xl min-w-[130px]  h-[20px] flex justify-center items-center col-span-4 md:col-span-2">
						<h5>{Type}</h5>
					</div>
				</div>

				<h4 lang="en" className="wrapped-text text-justify hyphens-auto text-xs leading-4 md:text-base font-light ">
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
