import {useMediaQuery} from 'react-responsive';

const useDeviceType = () => {
	// const is4k = useMediaQuery({minWidth: 3840});
	const is1440p = useMediaQuery({minWidth: 2560});
	const isDesktop = useMediaQuery({minWidth: 767, maxWidth: 2559});
	const isMobile = useMediaQuery({maxWidth: 767});

	return {isDesktop, is1440p, isMobile};
};

export default useDeviceType;
