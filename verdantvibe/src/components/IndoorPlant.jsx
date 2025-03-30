import "./css/IndoorPlant.css";



function IndoorPlant(props) {
  return (
    <section className="page-content">
    <section className="columns two gallery">
        <div className="plant-fragments">
            <h2 className="hide-for-large">{props.name}</h2>

            <img src={props.image} className="height-center margin" alt={props.name}/>
            <div className="image-text fragments">
                <h3>Description</h3>
                <p>
                    {props.description}
                </p>
            </div>
            
        </div>
        <div className="plant-fragments">
            <h2 className="hide-for-small">{props.name}</h2>
            <div className="fragments">
                <h3>Care</h3>
                <p>
                    {props.care}
                </p>
                <ul>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                </ul>
                <p>
                    {props.care2}
                </p>
            </div>
            <div className="fragments">
                <h3>Fun Fact</h3>
                <p>
                    {props.fact}
                </p>
            </div>
            <div className="fragments">
                <h3>More Research</h3>
                <p>
                {props.research}
                </p>
                <ul className="links refrences">
                    <li><a href={props.link1}> {props.link1name}</a></li>
                    <li><a href={props.link2}> {props.link2name}</a></li>
                    <li><a href={props.link3}> {props.link3name}</a></li>
                    
                </ul>
            </div>
        </div>
    </section>
</section>

  );
}

export default IndoorPlant;
