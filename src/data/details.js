// Logo images
import logogradient from '../assets/logo.svg';
import logo from '../assets/logo.png';
// Profile Image
import profile from '../assets/profile.png';
// Tech stack images
import html from '../assets/techstack/html.png';
import css from '../assets/techstack/css.png';
import sass from '../assets/techstack/sass.png';
import js from '../assets/techstack/js.png';
import react from '../assets/techstack/react.png';
import redux from '../assets/techstack/redux.png';
import tailwind from '../assets/techstack/tailwind.png';
import vscode from '../assets/techstack/vscode.png';
import github from '../assets/techstack/github-150.png';
import git from '../assets/techstack/git.png';
import npm from '../assets/techstack/npm.png';
import postman from '../assets/techstack/postman.png';
import figma from '../assets/techstack/figma.png';
import adobe from '../assets/techstack/adobe-premiere-pro-96.png';
import express from '../assets/techstack/express-js-150.png';
import finalCut from '../assets/techstack/final-cut-pro-x-96.png';
import firebase from '../assets/techstack/firebase-144.png';
import graphql from '../assets/techstack/GraphQL.png';
import java from '../assets/techstack/java-144.png';
import json from '../assets/techstack/json-96.png';
import jwt from '../assets/techstack/json-web-token-96.png';
import linux from '../assets/techstack/linux-96.png';
import mui from '../assets/techstack/material-ui-240.png';
import mongo from '../assets/techstack/mongodb-144.png';
import sql from '../assets/techstack/mysql-240.png';
import node from '../assets/techstack/nodejs-240.png';
import photoshop from '../assets/techstack/photoshop-96.png';
import python from '../assets/techstack/python-144.png';
import php from '../assets/techstack/php-96.png';
import ruby from '../assets/techstack/ruby-programming-language-144.png';
import styled from '../assets/techstack/styled-components-96.png';
import swift from '../assets/techstack/swift-144.png';
import ts from '../assets/techstack/ts.png';
import unix from '../assets/techstack/unix-96.png';
import wordpress from '../assets/techstack/wordpress-240.png';
import zustand from '../assets/techstack/zustand.png';
import rest from '../assets/techstack/rest-api.png';
import yarn from '../assets/techstack/yarn-logo-128.png';
import vite from '../assets/techstack/vite-js-logo.png';
import mapbox from '../assets/techstack/mapbox-logo.png';

// Project Images
import boulderberlin from '../assets/projects/boulderberlin.png';
import mystictarot from '../assets/projects/mystictarot.png';
import pfantastisch from '../assets/projects/pfandtastisch.png';
import mixtape from '../assets/projects/mixtape.png';
import boulderbbs from '../assets/projects/boulderbbs.png';
import weatherWear from '../assets/projects/weather_wear.png';
import ricknmorty from '../assets/projects/rickandmorty.png';

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
	about: `Design and programming have the ability to merge together and create elegant solutions to complex problems.
	I utilise a diverse skill set in frontend and backend development to achieve this, coupled with a strong commitment to agile methodologies and a
passion for collaborative teamwork. I'm committed to achieving excellence as a full stack engineer, dedicated to crafting 
web applications whilst continuing to explore aspects of design and grow as a developer. `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: 'https://www.linkedin.com/in/joshua-barua/',
	github: 'https://www.github.com/joshuabarua',
	instagram: 'https://www.instagram.com/joshua.barua',
};

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
	finalCut: finalCut,
	adobe: adobe,
	express: express,
	firebase: firebase,
	graphql: graphql,
	java: java,
	json: json,
	jwt: jwt,
	linux: linux,
	mui: mui,
	mongo: mongo,
	sql: sql,
	node: node,
	photoshop: photoshop,
	php: php,
	python: python,
	ruby: ruby,
	styled: styled,
	swift: swift,
	ts: ts,
	unix: unix,
	wordpress: wordpress,
	zustand: zustand,
	rest: rest,
	yarn: yarn,
	vite: vite,
	mapbox: mapbox,
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: 'Frontend Developer',
		Description: `At a leading European VFX studio, I significantly improved a VFX management web app using React.js, TypeScript, GraphQL, Jest, Zustand, and Material-UI. I developed and integrated features to improve the user experience, streamline workflows, and increase platform functionality. My tasks involved creating and optimizing components, enhancing UI, and bug resolution within an agile system.`,
		Company: `RISE FX GmbH`,
		Website: 'https://www.risefx.com/',
		Location: 'Berlin, Germany',
		Type: 'Full Time',
		Duration: 'Mar 2022 - Mar 2023',
		Tech: [react, ts, npm, graphql, mui, git, css],
	},
	{
		Position: 'Frontend Developer',
		Description:
			'[Currently migrated to vite and yarn due to create-react-app issues, currently squashing bugs] I developed a web portfolio for a versatile SFX makeup artist using React and JavaScript, ensuring a responsive and interactive frontend. Employing Material-UI and styled-components, I crafted a visually appealing and modern website. I integrated a lightbox feature, enhancing user experience by allowing detailed exploration of project details. Additionally, I organized project data—descriptions, images, and achievements—in a structured and easily accessible format.',
		Company: `Galaxy Girl MUA`,
		Website: 'https://github.com/joshuabarua/galaxy-girl-vite',
		Location: 'Remote/Brighton, UK',
		Type: 'Freelance',
		Duration: 'Jan 2022 - Jan 2023',
		Tech: [react, js, yarn, styled, mui, git, css, vite],
	},
	{
		Position: 'Content Developer',
		Description:
			'Working alongside marketing and technical teams to create informative videos on the usage of PROCAD software (PROFILE, PROOM, etc). Created scripts, managed production, edited demonstration videos and synchronised them alongside content created in German to ensure English speaking teams could better use the software.',
		Company: `PROCAD Gmbh`,
		Website: 'https://www.pro-file.com/en/',
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
		Tech: [wordpress, js, css],
	},
	{
		Position: 'Frontend Developer',
		Description:
			'Successfully managed development tasks while completing my final year at university. Using PHP and JS, I retrieved and manipulated data stored in an SQL database, enabling the marketing team to perform effective analysis. My responsibilities included API data management, database integration, data storage, creating evaluation tools, and developing the frontend UI.',
		Company: `Victoria Square/Ously Games`,
		Location: 'Remote/Frankfurt, Germany',
		Type: 'Part Time',
		Duration: 'Apr 2020 - Sep 2020',
		Tech: [js, php, sql, css],
	},
	{
		Position: 'Frontend Developer',
		Description:
			'Designing many features for a traffic control permit-issuing company website implementing a Wordpress CMS. Utilising handover guides for the future operation of the team. Implementing MapBox APIs and Javascript to enable certain custom features. Email campaigns designed and created for informative responses to customer queries.',
		Company: `Traffic Control Australia`,
		Location: 'Melbourne, Australia',
		Type: 'Part Time',
		Duration: 'Apr 2020 - Sep 2020',
		Tech: [wordpress, js, css, mapbox],
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: 'Diploma of Full Stack Development with Typescript',
		Website: 'https://www.codeacademyberlin.com/',
		Company: 'Code Academy Berlin',
		Location: 'Berlin, Germany',
		Type: 'Full Time',
		Duration: 'May 2023 - October 2023',
		Tech: [react, ts, js, graphql, yarn, tailwind, express, firebase, jwt, mui, git, github, rest, html, css, vite],
	},
	{
		Position: 'Bachelors Degree of Information Technology & Computer Science',
		Website: 'https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-information-technology-bp162/bp162opn9auscy',
		Company: `Royal Melbourne Institute of Technology University`,
		Location: 'Melbourne, Australia',
		Type: 'Full Time',
		Duration: 'Jul 2017 - Jan 2020',
		Tech: [java, swift, ruby, python, php, sql, js, git, github, html, css],
	},
	{
		Position: 'Associate Degree of Information Technology',
		Website: 'https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/associate-degrees/associate-degree-in-information-technology-ad006',
		Company: `Royal Melbourne Institute of Technology University`,
		Location: 'Melbourne, Australia',
		Type: 'Full Time',
		Duration: 'Jul 2016 - Jan 2017',
		Tech: [java, php, sql, js, git, html, css],
	},
];

// Enter your Project Details here
export const projectDetails = [
	{
		title: 'Boulder Bebis',
		image: boulderbbs,
		description: `[Work in Progress] A booking website for buying tokens to use at a local boulder hall timeslot online`,
		previewLink: 'https://boulder-bebis.vercel.app/',
		techstack: 'Typescript, Graphql, MongoDB, Passport, JWT, Auth,  HTML/CSS, JavaScript, Express, NodeJS, Client/Server',
		githubLink: 'https://github.com/joshuabarua/Final_Project_CAB',
	},
	{
		title: 'Weather Wear',
		image: weatherWear,
		description: `An app that consumes an API using Javascript. This is weather app that tells you what to wear given the temperature throughout the day based on clothing options selected.`,
		techstack: 'HTML/CSS, JavaScript, JSON, openWeatherAPI, geoLocation',
		previewLink: 'https://weather-wear.onrender.com/',
		githubLink: 'https://github.com/joshuabarua/CAB-JS-API-weatherApp',
	},
	{
		title: 'Pfandtastisch',
		image: pfantastisch,
		previewLink: 'https://pfandtastisch-app.vercel.app/',
		description: `[Work in Progress]  A web app to help users find the nearest pfandmachine nearby. Currently not hosted! `,
		techstack: 'Typescript, Reactjs, MongoDB, JWT, Express, Passport, Bcrypt/Auth, nodeJS, Client/Server, JSON',
		githubLink: 'https://github.com/joshuabarua/pfantastisch-app',
	},
	{
		title: 'Mystic Tarot',
		image: mystictarot,
		description: `[Work in Progress] A Tarot Card website that allows card selections and firebase as a login system. Work in progress!`,
		techstack: 'Typescript, Reactjs, CSS, Firebase',
		previewLink: 'https://cab-tarot-card-site-ts.vercel.app/',
		githubLink: 'https://github.com/joshuabarua/CAB-tarot-card-site-ts',
	},
	{
		title: 'Mixtape',
		image: mixtape,
		description: `A simple webapp to play songs that look like a mixtape`,
		techstack: 'Reactjs, JavaScript, CSS, Material-UI',
		previewLink: 'https://mixtape4pati.vercel.app/ ',
		githubLink: 'https://github.com/joshuabarua/mixtape_app',
	},
	{
		title: 'Rick and Morty API',
		image: ricknmorty,
		description: `A mini project completed at Code Academy Berlin in a two days using the rick and morty API to display characters using typescript`,
		techstack: 'Typescript, Reactjs, APIs, JSON',
		previewLink: 'https://ricknmorty-project2-5.vercel.app/',
		githubLink: 'https://github.com/joshuabarua/ricknmorty-project2.5',
	},
	{
		title: 'Boulder Berlin',
		image: boulderberlin,
		description: `A simple website to test design skills with only HTML/CSS`,
		techstack: 'HTML/CSS',
		previewLink: 'https://cab-project1-html-css.vercel.app/',
		githubLink: 'https://github.com/joshuabarua/CAB-project1-HTML-CSS',
	},
];
