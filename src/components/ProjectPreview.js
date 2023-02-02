

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
        <h3>
            {props.project.image}
        </h3>
        <Link>
				<button>
            Learn more
        </button>
        </Link>
    </section>
</div>
  )
}

export default ProjectPreview