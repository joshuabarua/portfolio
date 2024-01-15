import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useRef, useEffect, useState} from 'react';
import {personalDetails} from './Details';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import * as THREE from 'three';
import Sketch from 'react-p5';
import TRUNK from 'vanta/src/vanta.trunk';
import {DarkModeToggle} from './Components/DarkModeToggle';
import {useColorScheme} from './hooks/useColorScheme';
import Loading from './Components/Loading/Loading';
import {useMediaQuery} from 'react-responsive';
import About from './Pages/About';
import HomeDesktop from './Pages/Desktop/HomeDesktop';
import HomeMobile from './Pages/Mobile/HomeMobile';

function App() {
	const {isDark, setIsDark} = useColorScheme();
	const [showLoading, setLoading] = useState(true);
	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);
	const is4k = useMediaQuery({minWidth: 3840});
	const is1440p = useMediaQuery({minWidth: 2560, maxWidth: 3839});
	const isDesktop = useMediaQuery({minWidth: 768, maxWidth: 2559});
	const isMobile = useMediaQuery({maxWidth: 767});

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const initializeVanta = () => {
			return TRUNK({
				el: myRef.current,
				THREE: THREE,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 400.0,
				minWidth: 400.0,
				scale: 1,
				scaleMobile: 1,
				color: isDark ? 0x959393 : 0x0d0d0d,
				spacing: isDark ? 10.0 : 30,
				chaos: isDark ? 3.5 : 3.0,
			});
		};
		if (!vantaEffect || vantaEffect.isDark !== isDark) {
			if (vantaEffect) vantaEffect.destroy();
			setVantaEffect(initializeVanta());
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [isDark]);

	return (
		<div>
			{showLoading && <Loading showLoading={showLoading} />}
			<div id="background" ref={myRef}></div>
			<div id="frame">
				<div className="frame_line frame_line-left bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-right bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-top bg-dark-color dark:bg-light-color"></div>
				<div className="frame_line frame_line-bottom bg-dark-color dark:bg-light-color"></div>
			</div>
			<div className="mask">
				<div className="mask_top   dark:bg-dark-color bg-light-color"></div>
				<div className="mask_bottom  dark:bg-dark-color bg-light-color"></div>
				<div className="mask_left  dark:bg-dark-color bg-light-color"></div>
				<div className="mask_right  dark:bg-dark-color bg-light-color"></div>
			</div>

			{/* Conditional rendering based on screen size */}
			{is4k && <p className="text-green-500">This is a 4k screen view</p>}
			{is1440p && <p className="text-green-500">This is a 1440p screen view</p>}

			<Router>
				<div>
					{isDesktop && <HomeDesktop />}
					{isMobile && <HomeMobile />}

					<div id="content">
						<Routes>
							<Route path="/" element={<About />} />
							<Route path="/experience" element={<Experience />} />
							<Route path="/education" element={<Education />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/technologies" element={<Technologies />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
			<DarkModeToggle isDark={isDark} setIsDark={setIsDark} vantaEffect={vantaEffect} setVantaEffect={setVantaEffect} />
		</div>
	);
}

export default App;

// FOG({
// 	el: myRef.current,
// 	THREE: THREE,
// 	mouseControls: true,
// 	touchControls: true,
// 	gyroControls: false,

// 	highlightColor: 0x0,
// 	midtoneColor: 0xc0909,
// 	lowlightColor: 0x0,
// 	baseColor: 0xdedbdb,
// 	blurFactor: 0.3,
// })

// const setup = (p5, canvasParentRef) => {
// 	p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
// };

// const draw = (p5) => {
// 	// Define the gradient colors
// 	// let color1 = p5.color(255, 0, 0); // Red
// 	// let color2 = p5.color(0, 0, 255); // Blue

// 	// Set the diagonal gradient from bottom left to top right
// 	// setDiagonalGradient(p5, color1, color2);

// 	//Static TV background
// 	p5.background(0);
// 	p5.noStroke();
// 	for (let i = 0; i < 12000; i++) {
// 		p5.rect(p5.random(p5.width), p5.random(p5.height), 1, 1);
// 	}

// };
