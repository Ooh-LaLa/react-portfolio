import Projects from './data/projects.js';

const Projects() {
  return (
    <div>
        <ul>   
        {props.projects.map(project =>
          <li key={project.title}>
          </li>
        )}
        </ul>
    </div>
  )
}

export default Projects
