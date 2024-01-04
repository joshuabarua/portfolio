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
			<div id='page'>

			</div>
			<div>

			</div>
			<Router>
				<div
					className="grid grid-cols-2 grid-rows-4 gap-4 h-full"
					style={{
						color: 'white',
						textAlign: 'left',
						gridTemplateRows: '1fr 6fr',
						gridTemplateColumns: '3fr 8fr',
					}}>
					{/* Name and Tagline */}
					<div className="col-start-1 row-start-1 col-end-2 row-end-2">
						<h1 ref={h12} className="text-4xl ">
							{name}
						</h1>
						<h2 ref={h13}>{tagline}</h2>
					</div>

					{/* Header */}
					<div className="col-start-1 row-start-2 col-end-2 row-end-3">
						<Header />
					</div>

					{/* Content */}
					<div className="col-start-2 row-start-1 col-end-3 row-end-4 overflow-y-auto" id="DATA">
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
