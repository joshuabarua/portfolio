import {useState, useEffect} from 'react';

const useSpacing = ({isMobile, isDesktop, is1440p, isDark}) => {
	const [spacing, setSpacing] = useState(0);

	useEffect(() => {
		let newSpacing;
		if (isMobile) {
			newSpacing = isDark ? 4.0 : 6.0;
		} else if (isDesktop) {
			newSpacing = isDark ? 10.0 : 15.0;
		} else if (is1440p) {
			newSpacing = isDark ? 25.0 : 35.0;
		} else {
			newSpacing = isDark ? 35.0 : 45.0;
		}
		setSpacing(newSpacing);
	}, [isMobile, isDesktop, is1440p, isDark]);
	return spacing;
};

export default useSpacing;
