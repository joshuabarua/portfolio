import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import React, {useContext, Suspense} from 'react';
import {DarkModeToggle} from './Components/DarkModeToggle';
import Loading from './Components/Loading/Loading';
import {AppContext} from './context/AppContext';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(useGSAP);

function AnimatedRoutes() {
	const location = useLocation();
	const {routes} = useContext(AppContext);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.fromTo('.page-title', {opacity: 0, x: 10}, {opacity: 1, x: 0, duration: 0.6, ease: 'power2.out'})
			.fromTo('.personalDetails', {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.5, ease: 'power2.out'}, '-=0.3')
			.fromTo('.techSkills', {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1}, '-=0.3');
	}, [location]);

	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={React.createElement(route.component)} />
			))}
		</Routes>
	);
}

function App() {
	const {isDark, getHomeComponent, loading} = useContext(AppContext);

	useGSAP(() => {
		const pageIntroTl = gsap.timeline();
		pageIntroTl.from('.name-header', {opacity: 0, y: -10, duration: 0.5, delay: 0.3}, 1.8).from('.tagline-header', {opacity: 0, x: -10, duration: 0.5, delay: 0.3}, 2);
	});

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
				<div className="mask_top bg-mask-light dark:bg-dark-color "></div>
				<div className="mask_bottom bg-mask-light  dark:bg-dark-color "></div>
				<div className="mask_left bg-mask-light dark:bg-dark-color "></div>
				<div className="mask_right bg-mask-light dark:bg-dark-color "></div>
			</div>

			<Router>
				<>
					{getHomeComponent}
					<div id="content">
						<Suspense fallback={<Loading showLoading={true} />}>
							<AnimatedRoutes />
						</Suspense>
					</div>
				</>
			</Router>
			<DarkModeToggle isDark={isDark} />
		</div>
	);
}

export default App;
