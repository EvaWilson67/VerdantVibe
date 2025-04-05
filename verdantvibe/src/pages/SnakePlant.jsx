import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";

function SnakePlant() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="snakeplant.jpg"
        name="Snake Plant"
        description=" The snake plant is a resilient, low-maintenance indoor plant known for
                                its upright, sword-shaped leaves with green and yellow patterns. It can thrive in
                                various lighting conditions, from bright to low light, and requires minimal watering,
                                making it perfect for busy individuals or beginners. Its sturdy nature and ability to
                                adapt to different environments make it a popular choice for adding greenery to homes
                                and offices."
        fact=" Also knowns as Sansevaria, it is said to be a great air purifier. They don’t require to
                                be re-planted often. They also need to be dusted every so often."
        care="They grow slowly, so you won't need to worry about constant maintenance. If
                                you notice the leaves becoming floppy or discolored, it may be a sign of overwatering."
        li1="Indirect Light: AVOID DIRECT LIGHT"
        li2="Soil needs to dry out completely before watering<"
        li3="Prefers warm weather and humidity"
        care2=" During the growing season (spring and summer), you can fertilize once a month with a
                                balanced, diluted fertilizer to encourage healthy growth."

        research=" Although snake plants are one of the easier plants to care for, they are still plants. I
                                am not that good yet, but I found that as long as you care for them, and treat them like a living thing 
                                they most likely will survive. Some articles to help further your independent research:"
        link1="https://libguides.nybg.org/snakeplant"
        link1name="NYBG, an all about guide!"
        link2="https://extension.psu.edu/programs/master-gardener/counties/allegheny/news/snake-plants"
        link2name=" PennState, Information/Facts "
        link3="https://www.kew.org/plants/snake-plant"
        link3name="Kew, some more facts!"
      
      
      />
    </main>
  );
}

export default SnakePlant;
