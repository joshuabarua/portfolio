import React, {createContext, useState, useEffect, useMemo} from 'react';
import {useMediaQuery} from 'react-responsive';
import useDeviceType from '../hooks/useDeviceType';
import {desktopRoutes, mobileRoutes} from '../data/routes';
import HomeDesktop from '../Pages/Desktop/HomeDesktop';
import HomeMobile from '../Pages/Mobile/HomeMobile';

export const AppContext = createContext({
	isDark: false,
	setIsDark: () => {},
	isDesktop: false,
	isMobile: false,
	routes: [],
	getHomeComponent: null,
	loading: true,
	contentStyle: {},
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

	useEffect(() => {
		localStorage.setItem('colorScheme', JSON.stringify(isDark));
		document.body.classList.toggle('dark', isDark);
		setRoutes(getRoutes(isMobile, isDesktop));
	}, [getRoutes, isDark, isDesktop, isMobile]);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	const [loading, setLoading] = useState(true);

	return <AppContext.Provider value={{isDark, setIsDark, isDesktop, isMobile, routes, getHomeComponent, loading, contentStyle}}>{children}</AppContext.Provider>;
};
