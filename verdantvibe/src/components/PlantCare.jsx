import "./css/PlantCare.css";



function PlantCare(props) {
  return (
    <section className="plantCare columns care-box">
      {/* Conditionally render image first or text first */}
      {props.imageFirst ? (
        <>
          <div className="idea-img">
            <img src={"http://localhost:3001/images/care_images/" + props.image} alt={props.name} />
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
          <div className="idea-img">
            <img src={"http://localhost:3001/images/care_images/" + props.image} alt={props.name} />
          </div>
        </>
      )}
    </section>
  );
}

export default PlantCare;
