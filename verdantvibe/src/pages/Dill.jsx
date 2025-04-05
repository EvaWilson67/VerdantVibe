import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";
function Dill() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Dill"
        image1="dill2.jpg"
        description="It is native to the eastern Mediterranean region and western Asia. The word dill comes from
                            the old Norse word dylla, meaning to soothe or lull. It dates back in writing to about 3000
                            B.C. when it earned a mention in Egyptian medical texts.(spruceEats)"
        research="Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.thespruceeats.com/the-history-of-dill-1807592"
        link1name=" Dill Weed History and Uses"
        link2="https://www.rhs.org.uk/herbs/dill/grow-your-own"
        link2name="How to grow dill"
        link3="https://www.britannica.com/plant/dill"
        link3name="britannica"
        care1=" Dill thrive in sunny locations. Space plants 8-12 inches apart to allow for proper growth
                            and airflow."
        li1="Direct Sunlight"
        li2=" Prefers well-drained soil, slightly acidic to neutral pH (5.5–7.0)."
        li3="moist soil but not soggy conditions"
        care2="Best grown in cooler weather (60-70°F, or 15-21°C)."
        image2="dill.jpg"
      />
    </main>
  )

}

export default Dill;
