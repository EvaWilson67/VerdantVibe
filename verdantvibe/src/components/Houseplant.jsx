import "./css/Houseplant.css";

function HousePlant(props) {
  return (
      <a href={props.url} class="links">
        <section className="segment columns center">
          <div className="height-center">
            <img src={props.image} alt={props.name} />
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
        </section>
      </a>
  );
}

export default HousePlant;

// {props.difficulty === "easy" && (
//     <section className="segment columns center">
//     <div className="height-center">
//       <img src={props.image} alt={props.name} />
//     </div>
//     <div>
//       <h4>{props.name}</h4>
//       <p>{props.description}</p>
//     </div>
//   </section>
// )}
