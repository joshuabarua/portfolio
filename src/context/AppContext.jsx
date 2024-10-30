import React, {createContext, useState, useEffect, useLayoutEffect, useMemo} from 'react';
import {useMediaQuery} from 'react-responsive';
import useDeviceType from '../hooks/useDeviceType';
import {desktopRoutes, mobileRoutes} from '../data/routes';
import HomeDesktop from '../Pages/Desktop/HomeDesktop';
import HomeMobile from '../Pages/Mobile/HomeMobile';
import useSpacing from '../hooks/useVantaSpacing';

export const AppContext = createContext({
	isDark: false,
	setIsDark: () => {
		throw new Error('context not implemented.');
	},
	is1440p: false,
	isDesktop: false,
	isMobile: false,
	getRoutes: () => {},
	routes: [],
	setRoutes: () => {
		throw new Error('context not implemented.');
	},
	getHomeComponent: () => {
		throw new Error('context not implemented.');
	},
	loading: true,
	setLoading: () => {
		throw new Error('context not implemented.');
	},

	constentStyle: {},
	setContentStyle: () => {},
});

export const AppContextProvider = ({children}) => {
	const systemPrefersDark = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	const getInitialColorScheme = () => {
		const storedValue = localStorage.getItem('colorScheme');
		console.log('Stored val color: ', storedValue);
		if (storedValue !== null) {
			try {
				const parsedValue = JSON.parse(storedValue);
				if (typeof parsedValue === 'boolean') {
					return parsedValue;
				}
			} catch (error) {
				console.error('Error parsing persisted state:', error, 'Value:', storedValue);
			}
		}
		return systemPrefersDark;
	};

	const [isDark, setIsDark] = useState(getInitialColorScheme());

	// eslint-disable-next-line
	const contentStyle = useMemo(
		() => ({
			borderRadius: '3%',
			minWidth: '200px',
			background: isDark ? '#1f2020e7' : '#eaedf0e7',
			color: isDark ? '#e8dada' : '#111111',
		}),
		[isDark]
	);

	const {isDesktop, isMobile} = useDeviceType();

	const getRoutes = useMemo(() => (mobileScreen, desktopScreen) => mobileScreen ? mobileRoutes : desktopRoutes, []);
	const [routes, setRoutes] = useState(getRoutes(isMobile, isDesktop));

	const getHomeComponent = useMemo(() => (isMobile ? <HomeMobile /> : <HomeDesktop />), [isMobile]);

	const requestFullScreen = async () => {
		let element = await document.documentElement;
		let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
		if (requestMethod) {
			requestMethod.call(element);
			return true;
		} else if (typeof window.ActiveXObject !== 'undefined') {
			let wscript = new window.ActiveXObject('WScript.Shell');
			if (wscript !== null) {
				wscript.SendKeys('{F11}');
				return true;
			}
		}
	};
	const handleOrientationChange = () => {
		let myScreenOrientation = window.screen.orientation;
		console.log(myScreenOrientation);
		if (myScreenOrientation.type !== 'portrait-primary') {
			console.log('Runs');
			myScreenOrientation.lock('portrait-primary').catch((err) => {
				console.error('Failed to lock screen orientation:', err);
			});
		}
		myScreenOrientation.lock('portrait-primary').catch((err) => {
			console.error('Failed to lock screen orientation:', err);
		});
	};

	useEffect(() => {
		const handleFullScreen = () => requestFullScreen();
		const handleOrientation = () => handleOrientationChange();

		window.addEventListener('requestFullscreen', handleFullScreen);
		window.addEventListener('orientationchange', handleOrientation);

		localStorage.setItem('colorScheme', JSON.stringify(isDark));
		document.body.classList.toggle('dark', isDark);

		setRoutes(getRoutes(isMobile, isDesktop));

		return () => {
			window.removeEventListener('orientationchange', handleOrientation);
			window.removeEventListener('requestFullscreen', handleFullScreen);
		};
	}, [getRoutes, isDark, isDesktop, isMobile]);

	const spacing = useSpacing({isMobile, isDesktop, isDark});
	useLayoutEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);

		return () => clearTimeout(timer);
	}, [isDark, spacing]);

	const [loading, setLoading] = useState(true);

	return <AppContext.Provider value={{isDark, setIsDark, isDesktop, isMobile, routes, getHomeComponent, loading, contentStyle}}>{children}</AppContext.Provider>;
};
