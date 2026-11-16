import React from "react";

// Vertical page title in the right gutter.
// Each letter is its own block, left-aligned, so every title sits the same
// distance from the frame line. (With writing-mode: vertical, glyphs are
// centered in the column, so narrow letters like E or P drift away from it.)
export default function PageTitle({ children, className = "" }) {
	const text = React.Children.toArray(children)
		.join("")
		.replace(/\s+/g, " ")
		.trim();

	return (
		<h1 className={`page-title ${className}`} aria-label={text}>
			{[...text].map((char, i) => (
				<span
					key={i}
					aria-hidden="true"
					className={char === " " ? "page-title_space" : undefined}>
					{char === " " ? " " : char}
				</span>
			))}
		</h1>
	);
}
