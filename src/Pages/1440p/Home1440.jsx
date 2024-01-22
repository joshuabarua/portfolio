import React, {useEffect, useRef} from 'react';
import {personalDetails} from '../../data/details';
import Header from '../../Components/Header';
import gsap from 'gsap';

export default function Home1440() {
	const {name, tagline} = personalDetails;
	const h12 = useRef();
	const h13 = useRef();
	const h14 = useRef();

	useEffect(() => {
		const elements = [h12.current, h13.current, h14.current];
		gsap.from(elements, {
			x: (index) => (index === elements.length - 1 ? '200%' : '-100%'),
			delay: (index) => (index === elements.length - 1 ? 0.5 : index * 0.3 + 2),
			opacity: 0,
			duration: 2.5,
			ease: 'Power3.easeOut',
			stagger: 0.5,
		});
	}, []);

	return (
		<div>
			<div className="name">
				<h1 ref={h12} className="wrapped-text  text-dark-text dark:text-light-text text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
					{name}
				</h1>
				<h2 ref={h13} className="wrapped-text text-dark-text dark:text-light-text text-md md:text-lg lg:text-xl xl:text-3xl ">
					{tagline}
				</h2>
			</div>
			<div className="header">
				<Header />
			</div>
		</div>
	);
}