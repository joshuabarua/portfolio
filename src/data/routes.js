import About1440 from '../Pages/1440p/About1440';
import ContactForm1440 from '../Pages/1440p/Contact1440';
import Education1440 from '../Pages/1440p/Education1440';
import Experience1440 from '../Pages/1440p/Experience1440';
import Projects1440 from '../Pages/1440p/Projects1440';
import Technologies1440 from '../Pages/1440p/Technologies1440';
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

const midRoutes = [
	{path: '/', component: About1440},
	{path: '/contact', component: ContactForm1440},
	{path: '/experience', component: Experience1440},
	{path: '/education', component: Education1440},
	{path: '/technologies', component: Technologies1440},
	{path: '/projects', component: Projects1440},
];

export {desktopRoutes, mobileRoutes, midRoutes};
