import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import Garden from "./Garden";

const GardenPlants = () => {
  const [plants, setPlants] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://verdant-server.onrender.com/api/garden");
      setPlants(response.data);
    })();
  }, []);

  const vegetable = plants.filter((plant) => plant.type === "Vegetable");
  const fruit = plants.filter((plant) => plant.type === "Fruit");
  const herb = plants.filter((plant) => plant.type === "Herb");
  const flower = plants.filter((plant) => plant.type === "Flower");

  return (
    <div className="center">
      <section className="gardening-col">
        <h2>Vegetables</h2>
        <div className="columns three gallery">
        {vegetable.map((plant) => (
          <Garden
            _id={plant._id}
            image={plant.image}
            name={plant.name}
            url={plant.link}
            summary={plant.summary}
            type={plant.type}
          />
        ))}
        </div>
      </section>
      <section className="gardening-col">
        <h2>Fruits</h2>
        <div className="columns three gallery">
        {fruit.map((plant) => (
          <Garden
            _id={plant._id}
            image={plant.image}
            name={plant.name}
            url={plant.link}
            summary={plant.summary}
            type={plant.type}
          />
        ))}
        </div>
      </section>
      <section className="gardening-col">
        <h2>Herbs</h2>
        <div className="columns three gallery">
        {herb.map((plant) => (
          <Garden
            _id={plant._id}
            image={plant.image}
            name={plant.name}
            url={plant.link}
            summary={plant.summary}
            type={plant.type}
          />
        ))}
        </div>
      </section>
      <section className="gardening-col">
        <h2>Flowers</h2>
        <div className="columns three gallery">
        {flower.map((plant) => (
          <Garden
            _id={plant._id}
            image={plant.image}
            name={plant.name}
            url={plant.link}
            summary={plant.summary}
            type={plant.type}
          />
        ))}
        </div>
      </section>
    </div>
  );
};

export default GardenPlants;
