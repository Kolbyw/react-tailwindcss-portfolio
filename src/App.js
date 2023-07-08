import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home.jsx';
import About from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';

function App() {
	return (
		<Router>
			<div className="dark-bg-primary-dark transition duration-300">
				<ScrollToTop />
				<AppHeader />
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
				<AppFooter />
				<UseScrollToTop />
			</div>
		</Router >

	);
}

export default App;
