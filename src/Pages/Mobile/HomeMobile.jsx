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
		<div>
			<div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className="burger-line burger-line-top bg-dark-color dark:bg-light-color"></span>
				<span className="burger-line burger-line-middle bg-dark-color dark:bg-light-color"></span>
				<span className="burger-line burger-line-bottom bg-dark-color dark:bg-light-color"></span>
			</div>
			{shouldRender && (
				<div className={`menu-screen ${isOpen ? 'open' : ''} bg-light-color dark:bg-dark-color`} onAnimationEnd={onAnimationEnd}>
					<div className="min-h-[100px] mt-[30px]">
						<h1 className="wrapped-text  text-dark-text dark:text-light-text text-3xl ">{name}</h1>
						<h2 className="wrapped-text text-dark-text dark:text-light-text text-lg ">{tagline}</h2>
					</div>
					<div className="flex justify-center items-center min-h-[340px]">
						<Header setIsOpen={setIsOpen} isOpen={isOpen} />
					</div>
				</div>
			)}
		</div>
	);
};

export default HomeMobile;
