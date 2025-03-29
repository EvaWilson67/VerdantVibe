import "./css/Resources.css"

import Resource from "../components/Resource"
function Resources(){
    return(
        <main className="page-background">
            <section className="page-content page-background">
                <h1 className="center margin"> Other Resources</h1>
                <h3 className="center margin"> Sources and Inspirations I used</h3>

                <section id="resouce-columns" className="three gallery columns">

                <Resource
                name="houseplantjournal"
                description= "A great plant blog that has it's own podcast."
                image="images/resource_images/houseplantjournal.png  " 
                url="https://www.houseplantjournal.com/blog/"
                />
                <Resource
                name="janeperrone"
                description="A great plant blog that has it's own podcast."
                image="images/resource_images/janeperrone.png" 
                url="https://www.janeperrone.com/"
                />
                <Resource
                name="thehouseplantguru"
                description="I love the design and layout of this website. It also has great information!"
                image="images/resource_images/houseplantguru.png" 
                url="https://thehouseplantguru.com/"
                />
                <Resource
                name="How Not to Kill Your Houseplant"
                description="Great for beginners, it has all sorts of information on how to find the perfect plant for you, to tell tale signs of plant care."
                image="images/resource_images/howtonotkillyourhouseplant.png" 
                url="https://www.booksamillion.com/p/How-Not-Kill-Your-Houseplant/Veronica-Peerless/9780744087888?gStoreCode=578&gQT=1"
                />
                <Resource
                name="The New Plant Parent"
                description= "Teaches the art of understanding a plant’s needs and giving it a home with the right balance of light, water, and nutrients."
                image="images/resource_images/newplantparent.png" 
                url="https://www.barnesandnoble.com/w/the-new-plant-parent-darryl-cheng/1129279379?ean=9781419732393&gStoreCode=3462&gQT=1"
                />
                <Resource
                name="The Garden Plant Encyclopedia"
                description="Says what the title is! All about gardens."
                image="images/resource_images/gardenplantsencyclopedia.png" 
                url="https://thehouseplantguru.com/"
                />
                <Resource
                name="The First Book of Plants"
                description="The First Book of Plants by Alice Dickinson is a wonderful science book that targets upper elementary/middle school readers."
                image="images/resource_images/firstbookofplants.png" 
                url="https://www.barnesandnoble.com/w/the-first-book-of-plants-alice-dickinson/1103222874?ean=9780692874882&gQT=1"
                />
                <Resource
                name="The Secret World of Plants"
                description="Children can discover the secrets of more than 100 amazing plants in this treasury of fascinating flora, as well as the essentials of plant science, including photosynthesis, pollination, and germination."
                image="images/resource_images/secretworldofplants.png" 
                url="https://www.barnesandnoble.com/w/the-secret-world-of-plants-ben-hoare/1141391324?ean=9780744059830&gStoreCode=3462&gQT=1"
                />
                <Resource
                name="Plantopedia"
                description="Houseplants have the power to transform any room. With their lush foliage and structural beauty, they help create indoor oases that bring a sense of tranquility to our busy lives. "
                image="images/resource_images/plantopedia.png" 
                url="https://www.barnesandnoble.com/w/plantopedia-lauren-camilleri/1137000608?ean=9781925811773&gStoreCode=3462&gQT=1"
                />

                </section>
            </section>

        </main>
    );
}

export default Resources;