import React from 'react';
import {personalDetails} from '../../data/details.js';
import Header from '../../Components/Header';

export default function HomeDesktop() {
	const {name, tagline} = personalDetails;

	return (
		<>
			<h1 className="wrapped-text  text-dark-text dark:text-light-text text-xl  absolute left-[31px] top-[8px] z-10 name-header">{name}</h1>
			<h2 className="wrapped-text text-lg  text-dark-text dark:text-light-text  absolute left-[34px] top-[28px] z-10 tagline-header">{tagline}</h2>
			<div className="header">
				<Header />
			</div>
		</>
	);
}
