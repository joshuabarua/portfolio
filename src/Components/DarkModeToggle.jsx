import React from 'react';

export const DarkModeToggle = ({setIsDark, isDark, vantaEffect}) => {
	const handleToggle = () => {
		if (vantaEffect) {
			setIsDark(!isDark);
		}
	};

	return (
		<>
			<div className="lightdark flex gap-2">
				<div className="flex gap-1 text-base">
					<input type="checkbox" id="light-checkbox" className="custom-checkbox " checked={!isDark} onChange={() => handleToggle('light')} />
					<div className="custom-box" onClick={() => handleToggle('light')}>
						{!isDark ? '■' : '□'}
					</div>
					<label htmlFor="light-checkbox" className="mt-[3px]">
						LIGHT
					</label>
				</div>
				<div className="flex gap-1 text-base">
					<input type="checkbox" id="dark-checkbox" className="custom-checkbox" checked={isDark} onChange={() => handleToggle('dark')} />
					<div className="custom-box" onClick={() => handleToggle('dark')}>
						{isDark ? '■' : '□'}
					</div>
					<label htmlFor="dark-checkbox" className="mt-[3px]">
						DARK
					</label>
				</div>
			</div>
		</>
	);
};
