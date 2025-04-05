import axios from "axios";
import {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";

import PlantCare from "./PlantCare";

const CarePlant = () =>{
  const [cares, setCare] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    (async () =>{
      const response = await axios.get("https://verdant-server.onrender.com/api/care");
      setCare(response.data);

    })();

  }, []);

  return(
    <section className="center">
      {cares.map((care) =>(
         <PlantCare
         _id="1"
         imageFirst={care.imageFirst}
         image={care.image}
         name={care.name}
         description={care.summary}
       />

      ))}
    </section>
  )
}

export default CarePlant;