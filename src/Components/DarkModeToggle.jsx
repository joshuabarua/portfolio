import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export const DarkModeToggle = () => {
	const {isDark, setIsDark} = useContext(AppContext);

	const handleToggle = () => {
		setIsDark(!isDark);
	};

	return (
		<div className="lightdark gap-4">
			<button type="button" className="baseline" onClick={handleToggle} aria-pressed={!isDark}>
				<span className={`custom-box ${!isDark ? 'bg-[#1a1a1a]' : 'border-[1px] opacity-70'}`} aria-hidden="true"></span>
				<span className="toggle-label">LIGHT</span>
			</button>
			<button type="button" className="baseline" onClick={handleToggle} aria-pressed={isDark}>
				<span className={`custom-box ${isDark ? 'bg-[#f2f2f2]' : 'border-[1px] opacity-70 border-dark-color border-solid'}`} aria-hidden="true"></span>
				<span className="toggle-label">DARK</span>
			</button>
		</div>
	);
};
