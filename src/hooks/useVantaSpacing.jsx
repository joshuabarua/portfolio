import {useMemo} from 'react';

const useSpacing = ({isMobile, isDesktop, is1440p, isDark}) => {
	const spacing = useMemo(() => {
		if (isMobile) {
			return isDark ? 4.0 : 6.0;
		} else if (isDesktop) {
			return isDark ? 14.0 : 15.0;
		} else if (is1440p) {
			return isDark ? 15.0 : 18.0;
		} else {
			return isDark ? 20.0 : 25.0;
		}
	}, [isMobile, isDesktop, is1440p, isDark]);

	return spacing;
};

export default useSpacing;
