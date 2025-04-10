import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import PlantCare from "./PlantCare";
import AddCare from "./AddCare";

const CarePlant = () => {
  const [cares, setCare] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  //http://localhost:3001/api/care
  //https://verdant-server.onrender.com/api/care
  //after page loaded to asynch json retrieval
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://verdant-server.onrender.com/api/care"
      );
      setCare(response.data);
    })();
  }, []);

  // const openAddDialog = () => {
  //   setShowAddDialog(true);
  // };

  // const closeAddDialog = () => {
  //   console.log("I'm in the close method");
  //   setShowAddDialog(false);
  // };

  return (
    <>
    {/* <button id="add-symbol" className="float-right" onClick={openAddDialog}>+</button>
    {showAddDialog?(<AddCare closeAddDialog={closeAddDialog} />) : ("")} */}

      <section className="center">
        {cares.map((care) => (
          <PlantCare
            _id="1"
            imageFirst={care.imageFirst}
            image={care.image}
            name={care.name}
            description={care.summary}
          />
        ))}
      </section>
    </>
  );
};

export default CarePlant;
