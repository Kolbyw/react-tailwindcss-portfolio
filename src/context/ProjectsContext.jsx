import { useState, createContext } from 'react';
import { projectsData } from '../constants';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [selectProject, setSelectProject] = useState('');

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				selectProject,
				setSelectProject,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
