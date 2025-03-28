import "./css/PlantCare.css";

function PlantCare(props) {
  return (
    <section className="plantCare columns care-box ">
      <image src={props.image} alt={props.name}/>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </section>
  );
}

export default PlantCare;
