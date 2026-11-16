import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

// Box is sized to the cap height and sits on the text baseline,
// so it always lines up with the uppercase label regardless of font size.
const ThemeOption = ({ id, label, checked, onChange }) => (
	<label htmlFor={id} className="theme-option">
		<input
			type="radio"
			name="theme"
			id={id}
			className="custom-checkbox"
			checked={checked}
			onChange={onChange}
		/>
		<svg className="custom-box" viewBox="0 0 10 10" aria-hidden="true">
			<rect
				x="0.5"
				y="0.5"
				width="9"
				height="9"
				fill={checked ? "currentColor" : "none"}
				stroke="currentColor"
				strokeWidth="1"
			/>
		</svg>
		{label}
	</label>
);

export const DarkModeToggle = () => {
	const {isDark, setIsDark} = useContext(AppContext);

	return (
		<div className="lightdark" role="radiogroup" aria-label="Color theme">
			<ThemeOption
				id="light-checkbox"
				label="LIGHT"
				checked={!isDark}
				onChange={() => setIsDark(false)}
			/>
			<ThemeOption
				id="dark-checkbox"
				label="DARK"
				checked={isDark}
				onChange={() => setIsDark(true)}
			/>
		</div>
	);
};
