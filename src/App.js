import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {personalDetails} from './Details';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Header from './Components/Header';
import Experience from './Pages/Experience';
import Education from './Pages/Education';

function App() {
	const {name, tagline} = personalDetails;
	const h12 = useRef();
	const h13 = useRef();
	const myImageRef = useRef();

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
		<div>
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
						<h1 ref={h12} className="text-4xl ">
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
