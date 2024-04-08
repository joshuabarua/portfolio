import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useRef, useContext} from 'react';
import * as THREE from 'three';
// eslint-disable-next-line no-unused-vars
import Sketch from 'react-p5';
import TRUNK from 'vanta/src/vanta.trunk';
import {DarkModeToggle} from './Components/DarkModeToggle';
import Loading from './Components/Loading/Loading';
import useVantaEffect from './hooks/useVantaEffect';
import useSpacing from './hooks/useVantaSpacing';
import {AppContext} from './context/AppContext';

function App() {
	const {isDark, isMobile, isDesktop, is1440p, routes, getHomeComponent, loading} = useContext(AppContext);
	// const myRef = useRef(null);
	// const spacing = useSpacing({isMobile, isDesktop, is1440p, isDark});
	// const [vantaEffect, setVantaEffect] = useVantaEffect({isDark, myRef, THREE, TRUNK, spacing});

	return (
		<div id="main-app">
			{loading && <Loading showLoading={loading} />}
			<div id="background"></div>
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
			<DarkModeToggle isDark={isDark} />
		</div>
	);
}

export default App;
