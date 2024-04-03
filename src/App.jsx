import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useRef, useLayoutEffect, useState, useMemo} from 'react';
import * as THREE from 'three';
// eslint-disable-next-line no-unused-vars
import Sketch from 'react-p5';
import TRUNK from 'vanta/src/vanta.trunk';
import {DarkModeToggle} from './Components/DarkModeToggle';
import {useColorScheme} from './hooks/useColorScheme';
import Loading from './Components/Loading/Loading';
import HomeDesktop from './Pages/Desktop/HomeDesktop';
import HomeMobile from './Pages/Mobile/HomeMobile';
import useDeviceType from './hooks/useDeviceType';
import {desktopRoutes, bigRoutes, mobileRoutes} from './data/routes';
import Home1440 from './Pages/1440p/Home1440';
import useVantaEffect from './hooks/useVantaEffect';
import useSpacing from './hooks/useVantaSpacing';

function App() {
	const {isDark, setIsDark} = useColorScheme();
	const [showLoading, setLoading] = useState(true);
	const myRef = useRef(null);
	const {isMobile, isDesktop, is1440p} = useDeviceType();
	console.log('Mobile:', isMobile, 'Desktop: ', isDesktop, '1440p:', is1440p);
	const getRoutes = useMemo(
		() => (isMobile, isDesktop) => {
			if (isMobile) return mobileRoutes;
			if (isDesktop) return desktopRoutes;
			return bigRoutes;
		},
		[]
	);

	const routes = getRoutes(isMobile, isDesktop);
	const spacing = useSpacing({isMobile, isDesktop, is1440p, isDark});
	const [vantaEffect, setVantaEffect] = useVantaEffect({isDark, myRef, THREE, TRUNK, spacing});

	useLayoutEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, [spacing]);

	const getHomeComponent = useMemo(() => {
		if (isDesktop) return <HomeDesktop />;
		if (is1440p) return <Home1440 />;
		if (isMobile) return <HomeMobile />;
		return null;
	}, [isDesktop, is1440p, isMobile]);

	return (
		<div id="main-app">
			{showLoading && <Loading showLoading={showLoading} />}
			<div id="background" ref={myRef}></div>
			<div id="frame">
				<div className="frame_line frame_line-left bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-right bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-top bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-bottom bg-dark-color dark:bg-light-color"></div>
			</div>
			<div className="mask">
				<div className="mask_top  dark:bg-dark-color bg-mask-light"></div>
				<div className="mask_bottom  dark:bg-dark-color bg-mask-light"></div>
				<div className="mask_left  dark:bg-dark-color bg-mask-light"></div>
				<div className="mask_right  dark:bg-dark-color bg-mask-light"></div>
			</div>

			<Router>
				<>
					{getHomeComponent}
					<div id="content">
						<Routes>
							{routes.map((route, index) => (
								<Route key={index} path={route.path} element={React.createElement(route.component)} />
							))}
						</Routes>
					</div>
				</>
			</Router>
			<DarkModeToggle isDark={isDark} setIsDark={setIsDark} vantaEffect={vantaEffect} setVantaEffect={setVantaEffect} />
		</div>
	);
}

export default App;
