import "./css/PlantCare.css";

// /"http://localhost:3001/images/care_images/"
//https://verdant-server.onrender.com/images/care_images/
function PlantCare(props) {
  return (
    <section className="plantCare columns care-box">
      {/* Conditionally render image first or text first */}
      {props.imageFirst === "true" ? (
        <>
          <div className="idea-img">
            <img className="" src={ "https://verdant-server.onrender.com/images/care_images/" + props.image} alt={props.name} />
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.summary}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3>{props.name}</h3>
            <p>{props.summary}</p>
          </div>
          <div className="idea-img">
            <img src={"https://verdant-server.onrender.com/images/care_images/" + props.image} alt={props.name} />
          </div>
        </>
      )}
    </section>
  );
}

export default PlantCare;
