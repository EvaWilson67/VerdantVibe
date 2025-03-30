import "./css/Care.css";

import PlantCare from "../components/PlantCare";



function Care() {
  return (
    <main className="page-background">
      <section id="care-instructions" className="page-content page-background">
        <h1>Basic Plant Instructions</h1>

        <section className="center">
          <PlantCare
            name="Lighting"
            description="Most indoor plants do well with bright, indirect light, where they get plenty of light without being exposed to harsh, direct sun. Some plants, like succulents and cacti, need direct sunlight, while others, like pythos and snake plants, are more adaptable to low-light conditions. Finding the right balance of light is important to avoid issues like leaf burn."
            image="images/PlantCare/lighting.jpg"
            imageFirst={true}
          />
          <PlantCare
            name="Watering"
            description="Overwatering is a common mistake, so always check the soil before watering. Many plants prefer to dry out a bit between waterings—especially succulents and cacti, which need minimal water and thrive in drier conditions. For most indoor plants, water when the top inch of soil feels dry to the touch. Ensure your plant has drainage holes to allow excess water to escape and prevent root rot."
            image="images/PlantCare/watering.jpg"
            imageFirst={false}

          />
          <PlantCare
            name="Fertilizer"
            description="During the active growing season (spring and summer), plants benefit from regular feeding, typically once a month, with a balanced, water-soluble fertilizer. This boosts their growth and helps them produce vibrant leaves and flowers. In contrast, plants require less fertilizer during the dormant period (fall and winter), as their growth slows down."
            image="images/PlantCare/fertilizer.jpg"
            imageFirst={true} 

          />
          <PlantCare
            name="Repotting"
            description="Typically, you’ll need to repot every 1-2 years, depending on the plant's growth rate. Signs it’s time to repot include roots growing out of the drainage holes, a plant becoming top-heavy, or the soil drying out too quickly. Choose a pot that’s 1-2 inches larger in diameter than the current one, and make sure it has proper drainage."
            image="images/PlantCare/repotting.jpg"
            imageFirst={false}

          />
        </section>

      </section>
    </main>
  );
}

export default Care;
