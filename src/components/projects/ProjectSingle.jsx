import 'reactjs-popup/dist/index.css';

const ProjectSingle = ({ title, image, description, link, linkType, index }) => {
	return (
		<div className="rounded-xl shadow-lg hover-shadow-xl mb-10 sm-mb-0 bg-secondary-light dark-bg-ternary-dark">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="font-general-large text-lg md-text-xl text-ternary-dark dark-text-ternary-light mb-2">
						{title}
					</p>
					<hr></hr>
					<p className="dark-text-ternary-light mt-4">{description}</p>
				</div>
			</a>
		</div>
	);
};

export default ProjectSingle;
