
import { Outlet, Link } from "react-router-dom";

import "./css/Houseplant.css";

function HousePlant(props) {
  return (
      <Link to={props.url} className="links">
        <section className="segment columns center">
          <div className="height-center">
            <img src={"http://localhost:3001/images/house_images/" + props.image} alt={props.name} />
          </div>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
        </section>
      </Link>
  );
}

export default HousePlant;
