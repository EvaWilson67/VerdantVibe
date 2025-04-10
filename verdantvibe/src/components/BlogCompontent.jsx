import "./css/BlogComponent.css";

//http://localhost:3001/images/blog_images/
// /https://verdant-server.onrender.com/images/blog_images/
function BlogComponent(props) {
  return (
    <section className="blog center">
      <div className="columns">
        <img src={"https://verdant-server.onrender.com/images/blog_images/" + props.image} alt={props.date} />
        <div className="height-center">
          <h3>{props.date}</h3>
        </div>
      </div>

      <p>{props.description}</p>
    </section>
  );
}

export default BlogComponent;
