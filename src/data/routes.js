import About from '../Pages/About';
import ContactForm from '../Pages/Contact';
import Education from '../Pages/Education';
import Experience from '../Pages/Experience';
import AboutMobile from '../Pages/Mobile/AboutMobile';
import ContactMobile from '../Pages/Mobile/ContactMobile';
import EducationMobile from '../Pages/Mobile/EducationMobile';
import ExperienceMobile from '../Pages/Mobile/ExperienceMobile';
import ProjectsMobile from '../Pages/Mobile/ProjectsMobile';
import TechMobile from '../Pages/Mobile/TechMobile';
import Projects from '../Pages/Projects';
import Technologies from '../Pages/Technologies';

const mobileRoutes = [
	{path: '/', component: AboutMobile},
	{path: '/contact', component: ContactMobile},
	{path: '/experience', component: ExperienceMobile},
	{path: '/education', component: EducationMobile},
	{path: '/technologies', component: TechMobile},
	{path: '/projects', component: ProjectsMobile},
];

const desktopRoutes = [
	{path: '/', component: About},
	{path: '/contact', component: ContactForm},
	{path: '/experience', component: Experience},
	{path: '/education', component: Education},
	{path: '/technologies', component: Technologies},
	{path: '/projects', component: Projects},
];

export {desktopRoutes, mobileRoutes};
