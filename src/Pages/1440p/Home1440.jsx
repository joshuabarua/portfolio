import React from 'react';
import {personalDetails} from '../../data/details.js';
import Header from '../../Components/Header';

export default function Home1440() {
	const {name, tagline} = personalDetails;

	return (
		<>
			<h1 className="wrapped-text  text-dark-text dark:text-light-text text-xl  absolute left-[31px] top-[7px] z-10 text">{name}</h1>
			<h2 className="wrapped-text text-lg  text-dark-text dark:text-light-text  absolute left-[35px] top-[30px] z-10">{tagline}</h2>
			<div className="header">
				<Header />
			</div>
		</>
	);
}
