import "./css/House_plant.css";

import IndoorPlant from "../components/IndoorPlant";
function SwissCheese() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="swisscheese.jpg"
        name="Swiss Cheese Plant"
        description="Often confused with its cousin, the larger Monstera deliciosa, but the Swiss Cheese
                                Plant has smaller leaves and a more compact growth habit."
        fact=" Also knowns as Sansevaria, it is said to be a great air purifier. They don’t require to
                                be re-planted often. They also need to be dusted every so often."
        care="The Swiss Cheese Plant is a great addition to any space, bringing a touch of the tropics
                                into your home with its eye-catching leaves and easy care requirements."
        li1="Light: Prefers bright, indirect light but can tolerate lower light conditions"
        li2="Watering: Water when the top inch of soil feels dry"
        li3="Soil: Well-draining potting mix is ideal."
        care2=" Feed with a balanced liquid fertilizer during the growing season (spring and summer) every 4-6 weeks. Also, prune back any leggy growth to maintain its shape and encourage fuller, bushier growth."
        research=""
        link1="https://www.thespruce.com/grow-monstera-adansonii-swiss-cheese-plant-1902774"
        link1name=" How to Grow and Care for Swiss Cheese Plant"
        link2="https://www.livelyroot.com/blogs/plant-care/swiss-cheese-plant-care-and-growing-guide"
        link2name="Swiss Cheese Plant (Monstera Adansonii) Care & Growing Guide"
        link3="https://hort.extension.wisc.edu/articles/monstera-deliciosa/"
        link3name="Wisconsin Horticulture"
      />
    </main>
  );
}

export default SwissCheese;
