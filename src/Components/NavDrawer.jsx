import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { socialMediaUrl } from "../data/Details.js";

const navLinks = [
	{ path: "/", label: "Home" },
	{ path: "/experience", label: "Experience" },
	{ path: "/education", label: "Education" },
	{ path: "/technologies", label: "Technologies" },
	{ path: "/projects", label: "Personal Projects" },
	{ path: "/contact", label: "Contact" },
];

// The MENU label sits in the top gutter above the frame line.
// Opening drops a panel from the line; its edges continue the frame.
export default function NavDrawer() {
	const [isOpen, setIsOpen] = useState(false);
	const drawerRef = useRef(null);
	const location = useLocation();

	// Retract after navigating
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	// Retract on outside click or Escape
	useEffect(() => {
		if (!isOpen) return;

		const handlePointer = (e) => {
			if (drawerRef.current && !drawerRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		const handleKey = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("pointerdown", handlePointer);
		document.addEventListener("keydown", handleKey);
		return () => {
			document.removeEventListener("pointerdown", handlePointer);
			document.removeEventListener("keydown", handleKey);
		};
	}, [isOpen]);

	const { linkdein, github } = socialMediaUrl;

	return (
		<div
			ref={drawerRef}
			className={`nav-drawer ${isOpen ? "is-open" : ""}`}>
			<button
				type="button"
				className="nav-drawer_tab"
				aria-expanded={isOpen}
				aria-controls="nav-drawer-panel"
				onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "CLOSE" : "MENU"}
				<svg
					className="nav-drawer_chevron"
					viewBox="0 0 10 6"
					aria-hidden="true">
					<path
						d="M1 1l4 4 4-4"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
					/>
				</svg>
			</button>
			<div className="nav-drawer_panel" id="nav-drawer-panel">
				<div className="nav-drawer_inner">
					<ul className="nav-drawer_links">
						{navLinks.map((link) => (
							<li key={link.path}>
								<NavLink
									to={link.path}
									end
									tabIndex={isOpen ? 0 : -1}
									className={({ isActive }) =>
										`nav-drawer_link ${isActive ? "is-active" : ""}`
									}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="nav-drawer_social">
						<a
							href={github}
							target="_blank"
							rel="noreferrer noopener"
							tabIndex={isOpen ? 0 : -1}>
							GitHub ↗
						</a>
						<a
							href={linkdein}
							target="_blank"
							rel="noreferrer noopener"
							tabIndex={isOpen ? 0 : -1}>
							LinkedIn ↗
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
