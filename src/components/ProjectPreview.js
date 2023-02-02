import ProjectPreview from "./ProjectPreview";

const ProjectPreview() {
  return (
      <div>
      <img 
        src={props.image} 
        alt={props.title}
    />
    <section>
        <h3>
            {props.title}
        </h3>
        <h3>
            {props.image}
        </h3>
				<button>
            Learn more
        </button>
    </section>
</div>
  )
}

export default ProjectPreview