import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";

function ArrowHead() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="arrowhead.jpg"
        name="Arrowhead"
        description=" A fast-growing vine with arrow-shaped leaves that can be green or variegated with white,
                                pink, or cream. It thrives in bright, indirect light but can tolerate lower light
                                conditions."
        fact="These plants are susceptible to some bacterial and fungal diseases: Bacterial blight,
                                Stem rot, Bacterial leaf spot, Myrothecium leaf spot"
        care="A popular houseplant known for its striking, arrow-shaped leaves. Toxic to pets if
                                ingested, so they should be kept out of reach of animals and children."
        li1="Light: Prefers bright, indirect light "
        li2="Water: Keep soil evenly moist"
        li3="Pruning: Trim back growing tips to encourage bushier growth."
        care2="With proper care, this low-maintenance plant adds a lush, vibrant touch to any room."
        research="Arrowhead plants (Syngonium) are a great choice for anyone looking for a low-maintenance yet beautiful houseplant. While they don't require too much attention, they do need proper care to thrive. With the right environment and consistent care, these plants can flourish and grow. They’re fairly forgiving, making them a perfect option for beginners. To help you learn more about their care, here are a few articles to support your research:"
        link1="https://www.gardeningknowhow.com/houseplants/arrowhead-plant/arrowhead-plant-care-arrowhead-plant-or-syngonium-podophyllum.htm"
        link1name="Syngonium (Arrowhead Plant): Complete Care & Growing Guide"
        link2="https://thegreencorner.com.sg/arrowhead-plant-facts-all-you-need-to-know/"
        link2name="Arrowhead Plant Facts: All You Need to Know"
        link3="https://kids.kiddle.co/Arrowhead_(plant)"
        link3name="Arrowhead (plant) facts for kids"
      />
    </main>
  );
}

export default ArrowHead;
