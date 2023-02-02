import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

function ProjectPreview(props) {
  return (
      <div>
      <img 
        src={props.project.image} 
        alt={props.project.title}
    />
    <section>
        <h3>
            {props.project.title}
        </h3>
        <Link to={hyphenateWords(props.project.title)}>
				<button>Learn more</button>
        </Link>
    </section>
</div>
  )
}

export default ProjectPreview