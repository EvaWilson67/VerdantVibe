import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Blueberries() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Blueberries"
        image1="images/garden_images/blueberries2.jpg"
        description="The story of modern blueberry cultivation began with Elizabeth White, the daughter of a New
                            Jersey cranberry farmer, who saw the potential in blueberries in the late 1890s. In the
                            early 1900s, USDA botanist Frank Coville discovered that blueberries require acidic soil, a
                            crucial finding for cultivation. After reading his 1911 book, White offered land on her farm
                            for research, and together they developed the first cultivated blueberry varieties, leading
                            to the modern blueberry industry and establishing blueberries as a major commercial crop."
        research="Here are some articles that I got some of the above information/more research you can do on
                            your own."
        link1="https://extension.illinois.edu/blogs/garden-scoop/2019-01-19-history-blueberries-native-american-staple-domesticated-superfood"
        link1name="The
                                    history of blueberries: From Native American staple to domesticated superfood"
        link2="https://hgic.clemson.edu/factsheet/blueberry/"
        link2name="Home and Garden information
                                    center"
        link3="https://www.thespruce.com/growing-blueberries-1401960"
        link3name="How to Grow and Harvest
                                    Blueberries"
        care1="Plant blueberries in early spring or late fall, making sure the soil is workable and not too
                            wet."
        li1="Direct Sunlight"
        li2="Blueberries have shallow root systems and are sensitive to soil pH."
        li3="Blueberries need consistent moisture, especially during the growing season."
        care2="Space plants about 18–24 inches apart for compact varieties and 4–5 feet apart for larger
                            varieties. Rows should be about 4–5 feet apart to allow for airflow and growth. "
        image2="images/garden_images/blueberries.jpg"
      />
    </main>
  )

}

export default Blueberries;
