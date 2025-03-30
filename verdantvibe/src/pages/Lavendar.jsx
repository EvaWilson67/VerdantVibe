import "./css/House_plant.css";

import GardeningPlant from "../components/GardeningPlant";
function Lavendar() {
  return (
    <main className="page-content">
      <GardeningPlant
        name="Lavendar"
        image1="images/garden_images/lavendar2.jpg"
        description="Lavender is actually a herb. I however, had put lavender in flowers because I am not the
                            brightest and didn't care anymore. Lavender is originally from the Mediterranean, although
                            it’s now widely cultivated in temperate regions around the world. There are many species of
                            lavender, but Lavandula angustifolia (English lavender) is the most commonly grown for both
                            ornamental and practical purposes."
        research=" Here are some articles that I got some of the above
                            information/more research you can do on your own."
        link1="https://www.ahpa.org/herbs_in_history_lavender"
        link1name="Herbs in History: Lavender"
        link2="https://www.cachecreeklavender.com/history-of-lavender.html"
        link2name="History of
                                    Lavender"
        link3="https://www.gardendesign.com/plants/lavender.html"
        link3name="Lavender Plants: Essential
                                    Growing Guide, Types, and Care"
        care1="To harvest lavender, wait until the flowers are in full bloom. Cut the stems just above the
                            leaves, leaving about 3-4 inches of stem. Hang the stems upside down in a cool, dry place to
                            dry. Once dried, you can remove the buds for use in sachets, cooking, or essential oils."
        li1="Direct Sunlight"
        li2="Prefers well-drained soil that’s slightly alkaline"
        li3="Thrives in moderate temperatures and doesn’t like extreme heat or cold"
        care2=" Generally pest-resistant, but watch for aphids, spider mites, and fungal diseases like root
                            rot. Ensure good airflow around the plant and avoid overhead watering to help prevent fungal
                            infections."
        image2="images/garden_images/lavendar.jpg"
      />
    </main>
  )

}

export default Lavendar;
