import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// export const fadeIn = (direction, type, delay, duration) => {
// 	return {
// 		hidden: {
// 			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
// 			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
// 			opacity: 0,
// 		},
// 		show: {
// 			x: 0,
// 			y: 0,
// 			opacity: 1,
// 			transition: {
// 				type: type,
// 				delay: delay,
// 				duration: duration,
// 				ease: "easeOut",
// 			},
// 		},
// 	};
// };

const ProjectSingle = ({ title, image, description, link, linkType, index }) => {
	return (
		// <motion.div
		// 	variants={fadeIn('up', 'spring', index, 0.75)}
		// >
		<div className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
			<div>
				<img
					src={image}
					className="rounded-t-xl border-none"
					alt="Single Project"
				/>
			</div>
			<div className="text-center px-4 py-6">
				<p className="font-general-large text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
					{title}
				</p>
				<hr></hr>
				<p className="dark:text-ternary-light mt-4">{description}</p>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<button className="font-general-medium w-30 px-4 py-2.5 text-white text-center font-medium mt-4 tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500">{linkType}</button>
				</a>
			</div>
		</div>
		// </motion.div >
	);
};

export default ProjectSingle;
