import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";

function PeaceLily() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="peacelily.jpg"
        name="Peace Lily"
        description="Attractive indoor foliage plants that produce showy white flowers. They are not true
                                lilies but a member of the Araceae family, which also includes caladiums, elephant ears,
                                anthuriums, and callas."
        fact="Peace Lily’s white blooms are actually modified leaves called spathes."
        care=" Peace lilies likes higher humidity but adapts well to average indoor levels; misting the leaves
                                occasionally can help if the air is too dry."
        li1="Light: Prefers bright, indirect light "
        li2="Soil: Well-draining potting mix"
        li3="Watering: Water when the top inch of soil feels dry."
        care2="Use a balanced fertilizer every 6-8 weeks during the growing season (spring to fall)."
        research="The Peace Lily (Spathiphyllum) is a popular indoor plant known for its elegant white blooms and air-purifying qualities. It’s relatively easy to care for, thriving in low to medium light and only requiring occasional watering. Peace Lilies are forgiving plants, letting you know when they need water by wilting, but they bounce back quickly once hydrated. With a little attention to watering and the occasional leaf cleaning, they can flourish and bring a touch of tranquility to your home. To help you care for your Peace Lily, here are some articles to guide your research:"
        link1="https://hgic.clemson.edu/factsheet/peace-lily/"
        link1name="Home and Garden information center"
        link2="https://plants.ces.ncsu.edu/plants/spathiphyllum/"
        link2name="North Carolina Extension Gardener Plant Toolbox"
        link3="https://www.fnp.com/article/interesting-things-to-know-about-peace-lily-plant"
        link3name="Interesting Things to Know About Peace Lily Plant"
      />
    </main>
  );
}

export default PeaceLily;
