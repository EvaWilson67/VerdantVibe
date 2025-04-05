import "./css/HousePlants.css";

import Houseplants from "../components/House_Plants";

function HousePlants() {
  return (
    <main className="page-content">
      <h1 className="center house-plants"> Basic House Plants</h1>
      <h3 className="center house-plants">
        Some of the Best Plants to Own Based on Level of Experience
      </h3>

      <Houseplants />
    </main>
  );
}

export default HousePlants;
