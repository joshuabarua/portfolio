import React from 'react';

export const DarkModeToggle = ({setIsDark, isDark, vantaEffect}) => {
	const handleToggle = () => {
		console.log('button color scheme clicked');
		if (vantaEffect) {
			setIsDark(!isDark);
		}
	};

	return (
		<>
			<div className="lightdark  gap-4  ">
				<div className="baseline">
					<input type="checkbox" id="light-checkbox" className="custom-checkbox " checked={!isDark} onChange={() => handleToggle('light')} />
					<div className="custom-box" onClick={() => handleToggle('light')}>
						{!isDark ? '■' : '□'}
					</div>
					<label htmlFor="light-checkbox">LIGHT</label>
				</div>
				<div className="baseline">
					<input type="checkbox" id="dark-checkbox" className="custom-checkbox" checked={isDark} onChange={() => handleToggle('dark')} />
					<div className="custom-box " onClick={() => handleToggle('dark')}>
						{isDark ? '■' : '□'}
					</div>
					<label htmlFor="dark-checkbox">DARK</label>
				</div>
			</div>
		</>
	);
};
