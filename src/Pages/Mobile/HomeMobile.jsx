import React, {useState} from 'react';
import {personalDetails} from '../../Details';
import './burgerMenu.css'; // Make sure to create this CSS file

//TODO: Need to make  menu styles and add links, also adjust css"

const HomeMobile = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {name, tagline} = personalDetails;
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<div className="burger-lines">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			{isOpen && (
				<div className="menu-screen">
					<div>
						<div className="name">
							<p className="text-green-500">This is a Mobile view</p>
							<h1 className="wrapped-text  text-dark-text dark:text-light-text text-2xl md:text-3xl xl:text-4xl">{name}</h1>
							<h2 className="wrapped-text text-dark-text dark:text-light-text ">{tagline}</h2>
						</div>
						<div className="header">HEADER items</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomeMobile;
