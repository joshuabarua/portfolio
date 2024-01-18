import {useMediaQuery} from 'react-responsive';

const useDeviceType = () => {
	const is4k = useMediaQuery({minWidth: 3840});
	const is1440p = useMediaQuery({minWidth: 2560, maxWidth: 3839});
	const isDesktop = useMediaQuery({minWidth: 768, maxWidth: 2559});
	const isMobile = useMediaQuery({maxWidth: 767});

	return {isDesktop, is1440p, isMobile, is4k};
};

export default useDeviceType;
