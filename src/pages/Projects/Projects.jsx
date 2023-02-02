import ProjectData from '../../data/projects.js';
import ProjectList from '../../components/ProjectList.js';

function Project() {
  return (
    <div>
    <ProjectList projects={ProjectData}/>
    </div>
  )
}

export default Project
