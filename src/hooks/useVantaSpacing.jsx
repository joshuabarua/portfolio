import {useState, useEffect} from 'react';

const useSpacing = ({isMobile, isDesktop, is1440p, isDark}) => {
	const [spacing, setSpacing] = useState(0);

	useEffect(() => {
		let newSpacing;
		if (isMobile) {
			newSpacing = isDark ? 4.0 : 6.0;
		} else if (isDesktop) {
			newSpacing = isDark ? 14.0 : 15.0;
		} else if (is1440p) {
			newSpacing = isDark ? 15.0 : 18.0;
		} else {
			newSpacing = isDark ? 20.0 : 25.0;
		}
		setSpacing(newSpacing);
	}, [isMobile, isDesktop, is1440p, isDark]);
	return spacing;
};

export default useSpacing;
