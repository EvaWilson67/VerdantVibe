import "./css/House_plant.css";
import GardeningPlant from "../components/GardeningPlant";

function Kabocha() {
  return (
    <main className="page-content">
    <GardeningPlant
      name="Kabocha"
      image1="images/garden_images/Kabocha2.jpg"
      description="A type of Japanese pumpkin, is believed to have originated in Japan. Its name 'kabocha' is
                            derived from the Portuguese word 'cabocha', which means 'squash' or 'pumpkin.' The vegetable
                            itself, however, was introduced to Japan by Portuguese traders in the 16th century."
      research="Here are some articles that I got some of the above information/more research you can do on
                            your own."
      link1="https://www.kikkoman.com/en/culture/foodforum/spirit-of-the-seasons/36-3.html#:~:text=Kabocha%20squash%20was%20first%20introduced,skin%20and%20soft%2C%20watery%20flesh."
      link1name="kikkoman"
      link2="https://thewoksoflife.com/how-to-grow-kabocha-squash/"
      link2name="How to Grow Kabocha
                                    Squash"
      link3="https://gochisohistory.com/kabocha/"
      link3name="Kabocha: Japanese Pumpkins and
                                    Squashes"
      care1="Most kabocha is harvested in summer and autumn, but turns sweeter in autumn and winter after
                            a post-harvest ripening period."
      li1="Direct Sunlight"
      li2="Well-drained, loamy soil rich in organic matter."
      li3="Mix compost or well-rotted manure into the soil to provide nutrients."
      care2="You’ll know Kabocha is ready for harvest when the skins have changed from shiny to matte and
                            have a toughened exterior."
      image2="images/garden_images/squash.jpg"
    />
  </main>
  )

}

export default Kabocha;
