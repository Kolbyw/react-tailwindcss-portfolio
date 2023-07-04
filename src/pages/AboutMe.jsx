import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto text-center"
			>
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					About Me
				</p>
				<AboutMeBio />
			</motion.div>
		</AboutMeProvider>
	);
};

export default SectionWrapper(About, "about");
