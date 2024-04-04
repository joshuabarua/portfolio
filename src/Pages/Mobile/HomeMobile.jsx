import React, {useEffect, useState} from 'react';
import {personalDetails} from '../../data/details.js';
import './burgerMenu.css';
import Header from '../../Components/Header';

const HomeMobile = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {name, tagline} = personalDetails;
	const [shouldRender, setRender] = useState(isOpen);

	useEffect(() => {
		if (isOpen) setRender(true);
	}, [isOpen]);

	const onAnimationEnd = () => {
		if (!isOpen) setRender(false);
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="flex justify-start items-baseline absolute w-full ml-6 z-10">
				<h1 className="wrapped-text text-dark-text dark:text-light-text text-base sm:text-lg">{name}</h1>
			</div>
			<div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className="burger-line burger-line-top bg-dark-color dark:bg-light-color"></span>
				<span className="burger-line burger-line-middle bg-dark-color dark:bg-light-color"></span>
				<span className="burger-line burger-line-bottom bg-dark-color dark:bg-light-color"></span>
			</div>
			{shouldRender && (
				<>
					<div className={`flex justify-start items-baseline absolute w-full ml-6 ${isOpen ? 'z-20' : 'z-[-190]'} `}>
						<h4 className="wrapped-texttext-base sm:text-lg  text-dark-text dark:text-light-text ">{tagline}</h4>
					</div>
					<div className={`menu-screen ${isOpen ? 'open' : ''} bg-light-color dark:bg-dark-color`} onAnimationEnd={onAnimationEnd}>
						<div className="flex justify-center items-center h-screen w-screen">
							<Header setIsOpen={setIsOpen} isOpen={isOpen} />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default HomeMobile;
