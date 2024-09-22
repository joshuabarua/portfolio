import {useMediaQuery} from 'react-responsive';

const useDeviceType = () => {
	const isDesktop = useMediaQuery({minWidth: 767, maxWidth: 2559});
	const isMobile = useMediaQuery({maxWidth: 767});

	return {isDesktop, isMobile};
};

export default useDeviceType;
