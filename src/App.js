import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import {personalDetails} from './Details';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Header from './Components/Header';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import * as THREE from 'three';
import Sketch from 'react-p5';
import TRUNK from 'vanta/src/vanta.trunk';
import {DarkModeToggle} from './Components/DarkModeToggle';
import {useColorScheme} from './hooks/useColorScheme';
import Loading from './Components/Loading';

function App() {
	const {isDark, setIsDark} = useColorScheme();
	const {name, tagline} = personalDetails;
	const h12 = useRef();
	const h13 = useRef();
	const myImageRef = useRef();
	const [showLoading, setLoading] = useState(true);
	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);

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
				scaleMobile: 1.0,
				color: isDark ? 0x959393 : 0x0d0d0d,

				spacing: isDark ? 10.0 : 15,
				chaos: isDark ? 4.0 : 3.0,
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

	useEffect(() => {
		const elements = [h12.current, h13.current, myImageRef.current];
		gsap.from(elements, {
			x: (index) => (index === elements.length - 1 ? '200%' : '-100%'),
			delay: (index) => (index === elements.length - 1 ? 0.5 : index * 0.3 + 0.1),
			opacity: 0,
			duration: 1.5,
			ease: 'Power3.easeOut',
			stagger: 0.3,
		});
	}, []);

	return (
		<div id="">
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
			<Router>
				<div>
					<div className="name">
						<h1 ref={h12} className="wrapped-text  text-dark-text dark:text-light-text text-2xl md:text-3xl xl:text-4xl">
							{name}
						</h1>
						<h2 ref={h13} className="wrapped-text text-dark-text dark:text-light-text ">
							{tagline}
						</h2>
					</div>

					<div className="header">
						<Header />
					</div>

					<div id="content">
						<Routes>
							<Route path="/" element={<Home />} />
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
