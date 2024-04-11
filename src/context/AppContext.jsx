import React, {createContext, useState, useEffect, useLayoutEffect, useMemo} from 'react';
import {useMediaQuery} from 'react-responsive';
import useDeviceType from '../hooks/useDeviceType';
import {desktopRoutes, bigRoutes, mobileRoutes} from '../data/routes';
import HomeDesktop from '../Pages/Desktop/HomeDesktop';
import HomeMobile from '../Pages/Mobile/HomeMobile';
import Home1440 from '../Pages/1440p/Home1440';
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

	const {is1440p, isDesktop, isMobile} = useDeviceType();

	const getRoutes = useMemo(
		() => (mobileScreen, desktopScreen) => {
			if (mobileScreen) return mobileRoutes;
			if (desktopScreen) return desktopRoutes;
			return bigRoutes;
		},
		[]
	);
	const [routes, setRoutes] = useState(getRoutes(isMobile, isDesktop));

	const getHomeComponent = useMemo(() => {
		if (isDesktop) return <HomeDesktop />;
		if (isMobile) return <HomeMobile />;
		return <Home1440 />;
	}, [isDesktop, isMobile]);

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
		window.addEventListener('requestFullscreen', requestFullScreen);
		window.addEventListener('orientationchange', handleOrientationChange);

		localStorage.setItem('colorScheme', JSON.stringify(isDark));
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}

		setRoutes(getRoutes(isMobile, isDesktop));

		return () => {
			window.removeEventListener('orientationchange', handleOrientationChange);
		};
	}, [getRoutes, isDark, isDesktop, isMobile, window.screen.orientation.type]);

	const spacing = useSpacing({isMobile, isDesktop, is1440p, isDark});
	const [loading, setLoading] = useState(true);

	const [contentStyle, setContentStyle] = useState({
		borderRadius: '3%',
		minWidth: '200px',
	});

	useLayoutEffect(() => {
		if (isDark) {
			return setContentStyle({
				...contentStyle,
				background: '#1f2020e7',
				color: '#e8dada',
			});
		}
		setContentStyle({
			...contentStyle,
			background: '#eaedf0e7',
			color: '#111111',
		});
	}, [isDark]);

	useLayoutEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [contentStyle, isDark, spacing]);

	return <AppContext.Provider value={{isDark, setIsDark, is1440p, isDesktop, isMobile, routes, getHomeComponent, loading, contentStyle}}>{children}</AppContext.Provider>;
};
