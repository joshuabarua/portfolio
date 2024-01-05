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
import p5 from 'p5';
import * as THREE from 'three';
import Sketch from 'react-p5';
import FOG from 'vanta/src/vanta.fog';
import TRUNK from 'vanta/src/vanta.trunk';

function App() {
	const {name, tagline} = personalDetails;
	const h12 = useRef();
	const h13 = useRef();
	const myImageRef = useRef();

	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				TRUNK({
					el: myRef.current,
					THREE: THREE,
					mouseControls: false,
					touchControls: false,
					gyroControls: false,
					minHeight: 400.0,
					minWidth: 400.0,
					scale: 1,
					scaleMobile: 1.0,
					color: 0xf2f2f2,
					backgroundColor: 0x0d0d0d,
					spacing: 20.0,
					chaos: 2.0,
				})
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
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

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

	return (
		<div id="">
			<div id="background" ref={myRef}></div>
			<div id="frame">
				<div className="frame_line frame_line-left"></div>
				<div className="frame_line frame_line-right"></div>
				<div className="frame_line frame_line-top"></div>
				<div className="frame_line frame_line-bottom"></div>
			</div>
			<div className="mask">
				<div className="mask_top"></div>
				<div className="mask_bottom"></div>
			</div>
			<Router>
				<div>
					<div className="name">
						<h1 ref={h12} className="wrapped-text text-3xl md:text-2xl xl:text-4xl">
							{name}
						</h1>
						<h2 ref={h13}>{tagline}</h2>
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
		</div>
	);
}

export default App;
