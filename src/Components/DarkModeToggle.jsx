import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export const DarkModeToggle = () => {
	const {isDark, setIsDark} = useContext(AppContext);

	const handleToggle = (isChecked) => {
		setIsDark(!isDark);
	};

	return (
		<>
			<div className="lightdark gap-4">
				<div className="baseline">
					<input type="checkbox" id="light-checkbox" className="custom-checkbox" checked={!isDark} onChange={handleToggle} />
					<div className="custom-box" onClick={handleToggle}>
						{!isDark ? '■' : '□'}
					</div>
					<label htmlFor="light-checkbox">LIGHT</label>
				</div>
				<div className="baseline">
					<input type="checkbox" id="dark-checkbox" className="custom-checkbox" checked={isDark} onChange={handleToggle} />
					<div className="custom-box" onClick={handleToggle}>
						{isDark ? '■' : '□'}
					</div>
					<label htmlFor="dark-checkbox">DARK</label>
				</div>
			</div>
		</>
	);
};
