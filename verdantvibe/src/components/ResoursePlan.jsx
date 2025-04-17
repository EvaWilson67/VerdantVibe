import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import "./css/Resource.css"

import Resource from "./Resource";

const ResourcePlan = () => {
  const [resources, setResouce] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://verdant-server.onrender.com/api/resources");
      setResouce(response.data);
    })();
  }, []);

  return (
    <section id="resouce-columns" className="three gallery columns">
      {resources.map((resource) => (
        <Resource
          _id="1"
          name={resource.name}
          summary={resource.summary}
          image={resource.image}
          url={resource.url}
          type={resource.type}
        />
      ))}
    </section>
  );
};

export default ResourcePlan;
