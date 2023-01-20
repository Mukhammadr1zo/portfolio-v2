import { createContext } from 'react';
import PROJECTS_DATA from '../AppData/projects';

const AppContext = createContext();
export const ProjectsContext = createContext(PROJECTS_DATA);

export default AppContext;
