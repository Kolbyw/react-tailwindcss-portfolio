import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";

const Projects = () => {
	return (
		<ProjectsProvider>
			<motion.div
				initial={{ opacity: 0, y: -200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			>
				<div className="container mx-auto">
					<ProjectsGrid />
				</div>
			</motion.div>
		</ProjectsProvider>
	);
};

export default SectionWrapper(Projects, "projects");
