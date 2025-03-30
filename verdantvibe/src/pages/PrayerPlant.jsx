import "./css/House_plant.css";
import IndoorPlant from "../components/IndoorPlant";

function PrayerPlant() {
  return (
    <main className="page-background page-background-small">
      <IndoorPlant
        image="images/house_images/prayerplant.jpg"
        name="Prayer Plant"
        description="The Prayer Plant (Maranta leuconeura) is a striking, low-maintenance houseplant known
                                for its unique, colorful foliage and fascinating behavior. The plant's oval-shaped
                                leaves are decorated with intricate patterns of dark green, light green, red, and
                                purple, creating a beautiful contrast."
        fact=" One of the most interesting features of the Prayer Plant is its ability to 'pray' – its
                                leaves fold up at night, as if in prayer, and open up again during the day, responding
                                to the light."
        care="They grow slowly, so you won't need to worry about constant maintenance."
        li1="Light: Prefers bright, indirect light."
        li2="Watering: Keep the soil consistently moist but not soggy."
        li3="Soil: Well-draining potting mix is ideal"
        care2=" Feed with a balanced, diluted fertilizer once a month during the growing season (spring
                                and summer). Additionally, trim back any dead or damaged leaves to maintain its tidy
                                appearance."
        research="The Prayer Plant (Maranta leuconeura) is a striking and low-maintenance plant known for its vibrant, patterned leaves that fold up at night, resembling hands in prayer. It thrives in indirect light and enjoys consistently moist soil, making it ideal for spaces with higher humidity. While it’s not particularly fussy, the Prayer Plant appreciates regular care, such as watering when the soil feels dry and occasional misting to boost humidity. With a bit of attention, it will reward you with beautiful foliage and intriguing movements. To help you care for your Prayer Plant, here are some articles to guide your research:"
        link1="https://www.thespruce.com/grow-maranta-inside-1902647"
        link1name="Prayer Plant: Care & Growing Guide"
        link2="https://costafarms.com/blogs/plant-finder/prayer-plant"
        link2name="Costa Farms"
        link3="https://www.thesproutingbotanist.com/journal/prayer-pant-care"
        link3name="How I care for my Prayer Plants"
      />
    </main>
  );
}

export default PrayerPlant;
