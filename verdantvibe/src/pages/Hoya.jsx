import "./css/House_plant.css";
import IndoorPlant from "../components/IndoorPlant";

function Hoya() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="images/house_images/hoya.jpg"
        name="Hoya"
        description=" Commonly known as the Wax Plant, is a genus of tropical plants admired for their
                                fragrant, waxy flowers and thick, glossy leaves. They are easy to care for and make
                                great houseplants, often growing as trailing vines or climbers when given proper
                                support."
        fact="Hoyas are known for their ability to bloom year after year, especially if they’re given
                                the right conditions."
        care="They grow slowly, so you won't need to worry about constant maintenance. If
                                you notice the leaves becoming floppy or discolored, it may be a sign of overwatering."
        li1="Light: Prefer bright, indirect light "
        li2="Watering: Water when the soil is dry to the touch"
        li3="Humidity: Enjoys higher humidity but can adapt to average indoor humidity"
        care2=" Well-draining soil, like cactus or succulent mix, is ideal. Additionally, feed with a
                                balanced liquid fertilizer during the growing season (spring and summer), but reduce
                                fertilization in the fall and winter."
        research="Hoya plants, also known as wax plants, are unique and hardy houseplants that are relatively easy to care for. With their thick, waxy leaves and beautiful, fragrant flowers, they make a striking addition to any home. While they thrive in bright, indirect light and prefer to dry out between waterings, Hoyas are forgiving and can tolerate some neglect. Regular care, like occasional pruning and repotting, will help keep them healthy and encourage blooming. To help you get the most out of your Hoya plant, here are some articles to guide your research:"
        link1="https://www.thespruce.com/hoya-plants-1315763"
        link1name="How to Grow and Care for
                                        Hoya Plant"
        link2="https://canopyplantco.com/collections/hoya"
        link2name=" Canopy Plant Co"
        link3="https://homesteadbrooklyn.com/all/2019/4/8/the-ultimate-hoya-care-guide"
        link3name="The ultimate Hoya care guide"
      />
    </main>
  );
}

export default Hoya;
