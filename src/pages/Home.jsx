import { BrowserRouter } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { AboutMeProvider } from '../context/AboutMeContext';
import AboutMeBio from '../components/about/AboutMeBio';
import Button from '../components/reusable/Button';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
		</div>
	);
};

export default Home;
