import "./css/House_plant.css";
import IndoorPlant from "../components/IndoorPlant";

function ParlorPalm() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="parlorpalm.jpg"
        name="Parlor Palm"
        description=" a popular, low-maintenance houseplant known for its elegant, feathery fronds and ability
                                to thrive in indoor environments. Native to Central America, this palm is perfect for
                                brightening up any space with its lush, green foliage."
        fact="The parlor palm is one of the most extensively sold houseplant palms in the world.
"
        care=" Native to Central America, this palm is perfect for brightening up any space with its
                                lush, green foliage."
        li1="Light: Prefers bright, indirect light"
        li2="Watering: Water when the top 1-2 inches of soil feel dry. "
        li3="Soil: Well-draining potting mix is key to prevent waterlogging."
        care2=" Trim away any dead or yellowing fronds to maintain its clean, lush appearance. Also,Feed
                                with a balanced, diluted liquid fertilizer during the growing season (spring and
                                summer)."
        research="The Parlor Palm (Chamaedorea elegans) is a popular and low-maintenance houseplant known for its elegant, feathery fronds and ability to thrive in a variety of conditions. It’s an excellent choice for indoor spaces, as it tolerates low light and doesn't require frequent watering. While it’s a hardy plant, it will thrive with regular attention to water levels and occasional cleaning of its leaves. With its resilience and graceful appearance, the Parlor Palm can add a touch of greenery to any home. To help you care for your Parlor Palm, here are some articles to guide your research:"
        link1="https://www.thespruce.com/grow-chamaedorea-indoors-1902884"
        link1name="How to Grow and Care for Parlor Palm"
        link2="https://www.gardeningknowhow.com/houseplants/parlor-palm/parlor-palm-houseplants.html"
        link2name="Parlor Palm Houseplants: How To Care For A Parlor Palm Plant"
        link3="https://aerogarden.com/your-guide-to-parlor-palms.html"
        link3name="Your Guide To: Parlor Palms"
      />
    </main>
  );
}

export default ParlorPalm;
