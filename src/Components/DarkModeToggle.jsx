import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const DarkModeToggle = () => {
	const { isDark, setIsDark } = useContext(AppContext);

	const handleToggle = () => {
		setIsDark(!isDark);
	};

	return (
		<>
			<div className="lightdark gap-4">
				<div className="baseline">
					<input
						type="checkbox"
						id="light-checkbox"
						className="custom-checkbox"
						checked={!isDark}
						onChange={handleToggle}
					/>
					<svg
						className="custom-box"
						viewBox="0 0 14 14"
						aria-hidden="true"
						onClick={handleToggle}>
						<rect
							x="0.5"
							y="0.5"
							width="12"
							height="12"
							fill={!isDark ? "#1a1a1a" : "none"}
							stroke={isDark ? "#f2f2f2" : "#1a1a1a"}
							strokeWidth="1"
							opacity={!isDark ? 1 : 0.7}
						/>
					</svg>
					<h5 htmlFor="light-checkbox">LIGHT</h5>
				</div>
				<div className="baseline">
					<input
						type="checkbox"
						id="dark-checkbox"
						className="custom-checkbox"
						checked={isDark}
						onChange={handleToggle}
					/>
					<svg
						className="custom-box"
						viewBox="0 0 14 14"
						aria-hidden="true"
						onClick={handleToggle}>
						<rect
							x="0.5"
							y="0.5"
							width="12"
							height="12"
							fill={isDark ? "#f2f2f2" : "none"}
							stroke="#1a1a1a"
							strokeWidth="1"
							opacity={isDark ? 1 : 0.7}
						/>
					</svg>
					<h5 htmlFor="dark-checkbox">DARK</h5>
				</div>
			</div>
		</>
	);
};
