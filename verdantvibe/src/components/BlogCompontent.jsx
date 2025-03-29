import "./css/BlogComponent.css";

function BlogComponent(props) {
  return (
    <section className="blog center">
      <div className="columns">
        <img src={props.image} alt={props.date} />
        <div className="height-center">
          <h3>{props.date}</h3>
        </div>
      </div>

      <p>{props.description}</p>
    </section>
  );
}

export default BlogComponent;
