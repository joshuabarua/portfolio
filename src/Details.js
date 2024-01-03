// Logo images
import logogradient from './assets/logo.svg';
import logo from './assets/logo.png';
// Profile Image
import profile from './assets/profile.png';
// Tech stack images
import html from './assets/techstack/html.png';
import css from './assets/techstack/css.png';
import sass from './assets/techstack/sass.png';
import js from './assets/techstack/js.png';
import react from './assets/techstack/react.png';
import redux from './assets/techstack/redux.png';
import tailwind from './assets/techstack/tailwind.png';
import vscode from './assets/techstack/vscode.png';
import github from './assets/techstack/github.png';
import git from './assets/techstack/git.png';
import npm from './assets/techstack/npm.png';
import postman from './assets/techstack/postman.png';
import figma from './assets/techstack/figma.png';
// Project Images
import projectImage1 from './assets/projects/project1.jpg';
import projectImage2 from './assets/projects/project2.jpg';
import projectImage3 from './assets/projects/project3.jpg';
import projectImage4 from './assets/projects/project4.jpg';
import projectImage5 from './assets/projects/project5.jpg';
import projectImage6 from './assets/projects/project6.jpg';

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: 'Joshua Barua-Fowle',
	tagline: 'Fullstack Developer',
	img: profile,
	about: `I believe design and programming can merge together and create elegant solutions to complex problems.
	I utilise a diverse skill set in
frontend, backend, and full-stack
development, coupled with a strong
commitment to agile methodologies and a
passion for collaborative teamwork.
I'm committed to achieving excellence as a full-stack engineer, dedicated to crafting scalable
web applications.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: 'https://www.linkedin.com/in/joshua-barua/',
	github: 'https://www.github.com/joshuabarua',
	instagram: 'https://www.instagram.com/joshua.barua',
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: 'Frontend Developer',
		Description: `Contributed significantly to a prominent European VFX studio, enhancing a shot-grid style VFX management web app using React.js, TypeScript, GraphQL, Jest, and Material-UI. I played a pivotal role in developing and integrating new features to improve user experience, streamline workflows, and boost overall platform functionality. I leveraged React.js for interactive and responsive interfaces, GraphQL for efficient data handling, Jest for rigorous testing, and Material-UI for visually engaging designs. My responsibilities included creating and optimizing components and pages, enhancing UI, and resolving bugs within an agile ticket-based system.`,
		Company: `RISE FX GmbH`,
		Location: 'Berlin, Germany',
		Type: 'Full Time',
		Duration: 'Mar 2022 - Mar 2023',
	},
	{
		Position: 'Frontend Developer',
		Description:
			'I developed a web portfolio for a versatile SFX makeup artist using React and JavaScript, ensuring a responsive and interactive frontend. Employing Material-UI and styled-components, I crafted a visually appealing and modern website. I integrated a convenient lightbox feature, enhancing user experience by allowing detailed exploration of project details. Additionally, I organized project data—descriptions, images, and achievements—in a structured and easily accessible format.',
		Company: `Galaxy Firl MUA`,
		Location: 'Remote/Brighton, UK',
		Type: 'Freelance',
		Duration: 'Jan 2022 - Jan 2023',
	},
	{
		Position: 'Content Developer',
		Description:
			'Working alongside marketing and technical teams to create informative videos on the usage of PROCAD software (PROFILE, PROOM, etc). Created scripts, managed production, edited demonstration videos and synchronised them alongside content created in German to ensure English speaking teams could better use the software.',
		Company: `PROCAD Gmbh`,
		Location: 'Remote/Berlin, Germany',
		Type: 'Part Time',
		Duration: 'Jul 2021 - Mar 2022',
	},
	{
		Position: 'Freelance',
		Description: `Created a WordPress-based CMS for an art portfolio, boosting visibility and interest in the client's work. Swiftly resolved technical issues to minimize downtime and ensure uninterrupted website access. Additionally, offered comprehensive training and support, empowering the client to independently manage and update content.`,
		Company: `Peace of Art`,
		Location: 'Remote/Walldorf, Germany',
		Type: 'Part Time',
		Duration: 'Jun 2021 - Jan 2022',
	},
	{
		Position: 'Frontend Developer',
		Description:
			'I successfully managed development tasks while completing my final year at university. Using PHP, I retrieved and manipulated data stored in an SQL database, enabling the marketing team to perform effective analysis. My responsibilities included API data management, database integration, data storage, creating evaluation tools, and developing the frontend for data viewing.',
		Company: `Victoria Square/Ously Games`,
		Location: 'Remote/Frankfurt, Germany',
		Type: 'Part Time',
		Duration: 'Apr 2020 - Sep 2020',
	},
	{
		Position: 'Frontend Developer',
		Description:
			'I successfully managed development tasks while completing my final year at university. Using PHP, I retrieved and manipulated data stored in an SQL database, enabling the marketing team to perform effective analysis. My responsibilities included API data management, database integration, data storage, creating evaluation tools, and developing the frontend for data viewing.',
		Company: `Traffic Control Australia`,
		Location: 'Remote/Frankfurt, Germany',
		Type: 'Part Time',
		Duration: 'Apr 2020 - Sep 2020',
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: 'Diploma of Full Stack Development with Typescript',
		Company: 'Code Academy Berlin',
		Location: 'Berlin, Germany',
		Type: 'Full Time',
		Duration: 'May 2023 - October 2023',
	},
	{
		Position: 'Bachelors Degree of Information Technology & Computer Science',
		Company: `Royal Melbourne Institute of Technology University`,
		Location: 'Melbourne, Australia',
		Type: 'Full Time',
		Duration: 'Jul 2017 - Jan 2020',
	},
	{
		Position: 'Associate Degree of Information Technology',
		Company: `Royal Melbourne Institute of Technology University`,
		Location: 'Melbourne, Australia',
		Type: 'Full Time',
		Duration: 'Jul 2016 - Jan 2017',
	},
];

// Tech Stack and Tools
export const techStackDetails = {
	html: html,
	css: css,
	js: js,
	react: react,
	redux: redux,
	sass: sass,
	tailwind: tailwind,
	vscode: vscode,
	postman: postman,
	npm: npm,
	git: git,
	github: github,
	figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
	{
		title: 'Project title 1',
		image: projectImage1,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
	{
		title: 'Project title 2',
		image: projectImage2,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
	{
		title: 'Project title 3',
		image: projectImage3,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
	{
		title: 'Project title 4',
		image: projectImage4,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
	{
		title: 'Project title 5',
		image: projectImage5,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
	{
		title: 'Project title 6',
		image: projectImage6,
		description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
		techstack: 'HTML/CSS, JavaScript',
		previewLink: 'https://google.com',
		githubLink: 'https://github.com',
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: 'joshua.k.barua@gmail.com',
	phone: '+49 176 4184 9375',
};
