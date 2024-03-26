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
			<div className="lightdark flex justify-center items-start gap-5  ">
				<div className="flex gap-[1px] justify-center items-center ">
					<input type="checkbox" id="light-checkbox" className="custom-checkbox " checked={!isDark} onChange={() => handleToggle('light')} />
					<div className="custom-box" onClick={() => handleToggle('light')}>
						{!isDark ? '■' : '□'}
					</div>
					<label htmlFor="light-checkbox" className="mt-[2px]">
						LIGHT
					</label>
				</div>
				<div className="flex gap-[1px] justify-center items-center ">
					<input type="checkbox" id="dark-checkbox" className="custom-checkbox w-0 h-0" checked={isDark} onChange={() => handleToggle('dark')} />
					<div className="custom-box " onClick={() => handleToggle('dark')}>
						{isDark ? '■' : '□'}
					</div>
					<label htmlFor="dark-checkbox" className="mt-[2px]">
						DARK
					</label>
				</div>
			</div>
		</>
	);
};
