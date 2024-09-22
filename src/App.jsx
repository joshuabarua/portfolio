import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useContext} from 'react';
import {DarkModeToggle} from './Components/DarkModeToggle';
import Loading from './Components/Loading/Loading';
import {AppContext} from './context/AppContext';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

function App() {
	const {isDark, routes, getHomeComponent, loading} = useContext(AppContext);

	useGSAP(() => {
		const pageIntroTl = gsap.timeline();
		const pageTitles = gsap.timeline();

		pageIntroTl
			.from(
				'.name-header',
				{
					opacity: 0,
					y: -10,
					duration: 0.5,
					delay: 0.3,
				},
				1.8
			)
			.from(
				'.tagline-header',
				{
					opacity: 0,
					x: -10,
					duration: 0.5,
					delay: 0.3,
				},
				2
			);

		pageTitles
			.from('.page-title', {
				opacity: 0,
				x: 10,
				duration: 0.6,
				delay: 2,
			})
			.from('.personalDetails', {
				opacity: 0,
				y: 10,
				duration: 0.5,
				delay: 2.0,
			})
			.from('.techSkills', {
				opacity: 0,
				x: -10,
				duration: 0.5,
				delay: 1.8,
				stagger: 0.3,
			});
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
