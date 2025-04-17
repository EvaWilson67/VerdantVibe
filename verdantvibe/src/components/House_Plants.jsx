import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import HousePlant from "./Houseplant";

const HousePlants = () => {
  const [plants, setPlants] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://verdant-server.onrender.com/api/housePlants");
      setPlants(response.data);
    })();
  }, []);

  const easyPlants = plants.filter((plant) => plant.section === "Easy");
  const mediumPlants = plants.filter((plant) => plant.section === "Medium");
  const hardPlants = plants.filter((plant) => plant.section === "Hard");

  return (
    <section className="columns three center">
      <div className="house-plants">
        <h3>Easy</h3>
        <div className="house-plants-information">
          {easyPlants.map((plant) => (
            <HousePlant
              _id={plant._id}
              name={plant.name}
              url={plant.link}
              summary={plant.summary}
              image={plant.image}
              difficulty={plant.section}
            />
          ))}
        </div>
      </div>
      <div className="house-plants">
        <h3>Medium</h3>
        <div className="house-plants-information">
          {mediumPlants.map((plant) => (
            <HousePlant
              _id={plant._id}
              name={plant.name}
              url={plant.link}
              summary={plant.summary}
              image={plant.image}
              difficulty={plant.section}
            />
          ))}
        </div>
      </div>
      <div className="house-plants">
        <h3>Hard</h3>
        <div className="house-plants-information">
          {hardPlants.map((plant) => (
            <HousePlant
              _id={plant._id}
              name={plant.name}
              url={plant.link}
              summary={plant.summary}
              image={plant.image}
              difficulty={plant.section}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousePlants;
