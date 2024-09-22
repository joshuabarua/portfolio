import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export const DarkModeToggle = () => {
	const {isDark, setIsDark} = useContext(AppContext);

	const handleToggle = () => {
		setIsDark(!isDark);
	};

	return (
		<>
			<div className="lightdark gap-4">
				<div className="baseline">
					<input type="checkbox" id="light-checkbox" className="custom-checkbox" checked={!isDark} onChange={handleToggle} />
					<div className={`custom-box  ${!isDark ? 'bg-[#1a1a1a]' : ' border-[1px] opacity-70'}`} onClick={handleToggle}></div>
					<h5 htmlFor="light-checkbox">LIGHT</h5>
				</div>
				<div className="baseline">
					<input type="checkbox" id="dark-checkbox" className="custom-checkbox" checked={isDark} onChange={handleToggle} />
					<div className={`custom-box  ${isDark ? 'bg-[#f2f2f2]' : 'border-[1px] opacity-70 border-dark-color border-solid'}`} onClick={handleToggle}></div>
					<h5 htmlFor="dark-checkbox">DARK</h5>
				</div>
			</div>
		</>
	);
};
