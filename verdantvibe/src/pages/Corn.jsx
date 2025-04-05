import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Corn() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Corn"
        image1="corn2.jpg"
        description="Corn was first domesticated by native peoples in southern Mexico about 10,000 years ago.
                            Modern corn is believed to have been derived from the Balsas teosinte (Zea mays
                            parviglumis), a wild grass. Over time, through selective breeding, corn evolved into the
                            large, high-yield crop that we
                            recognize today."
        research="Here are some articles that I got some of the above information/more research you can do on
                            your own."
        link1="https://www.britannica.com/plant/corn-plant"
        link1name="Britannica"
        link2="https://www.ndsu.edu/pubweb/chiwonlee/plsc211/student%20papers/articles11/A.Shanahan1/History.html#:~:text=Scientists%20believe%20people%20living%20in,husked%20ear%20of%20modern%20corn."
        link2name=" History of Corn"
        link3="https://www.patchplants.com/pages/plant-care/complete-guide-to-corn-plant-care/"
        link3name="Complete
                                    guide to corn plant care"
        care1="Corn is wind-pollinated, so it's best to plant, 1–2 inches deep, in blocks rather than long
                            rows for better pollen transfer."
        li1="Direct Sunlight"
        li2="Needs regular watering, especially during its growth stages"
        li3="Keep the area around corn plants free of weeds"
        care2=" Be mindful that corn has shallow roots, so they can be unstable in strong winds, especially
                            when the plants are tall."
        image2="corn.jpg"
      />
    </main>
  )

}

export default Corn;
