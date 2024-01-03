import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import {personalDetails} from './Details';
import Home from './Pages/Home';
import About from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Header from './Components/Header';
import Experience from './Pages/Experience';
import Education from './Pages/Education';

function App() {
	const {name, tagline, img} = personalDetails;
	const h12 = useRef();
	const h13 = useRef();
	const myImageRef = useRef();
	const [isOpen, setIsOpen] = useState(false);

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
		<div
			className=" h-full w-full flex  items-start justify-start flex-col"
			style={{
				color: 'white',
				textAlign: 'left',
				gap: '50px',
			}}>
			<div>
				<h1 ref={h12} className="text-4xl">
					{name}
				</h1>
				<h2 ref={h13}>{tagline}</h2>
			</div>
			<div className=" h-full w-full flex justify-between flex-row  gap-7">
				<Router>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} />

					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/experience" element={<Experience />} />
						<Route path="/education" element={<Education />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/technologies" element={<Technologies />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
