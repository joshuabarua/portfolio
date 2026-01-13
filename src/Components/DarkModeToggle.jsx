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
				<span className={`custom-box ${!isDark ? 'filled' : 'empty'}`} aria-hidden="true"></span>
				<span className="toggle-label">LIGHT</span>
			</button>
			<button type="button" className="baseline" onClick={handleToggle} aria-pressed={isDark}>
				<span className={`custom-box ${isDark ? 'filled' : 'empty'}`} aria-hidden="true"></span>
				<span className="toggle-label">DARK</span>
			</button>
		</div>
	);
};
