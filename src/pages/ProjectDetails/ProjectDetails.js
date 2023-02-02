import findProject from '../../utilities/findProject.js'
import { useParams } from 'react-router-dom'


function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  
  return (
  <>
  <h1>{project.title}</h1>
<button><a href={project.repositoryLink}>GitHub</a></button>

<button><a href={project.deploymentLink}>Deployment Link</a></button>
<img src={project.image} alt={project.title}></img>

<p>{project.description}</p>
  </>

  
)}


export default ProjectDetails
