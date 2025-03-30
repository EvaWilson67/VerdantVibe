import { Outlet, Link } from "react-router-dom";


import "./css/Garden.css";

function Garden(props) {
  return (
    <Link to={props.url} class="links">
      <div className="unhidden-title node">
        <img src={props.image} alt={props.name} />
        <div class="title-container">
          <h4>{props.name}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Garden;
