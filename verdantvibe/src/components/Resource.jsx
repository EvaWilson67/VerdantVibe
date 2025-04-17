import "./css/Resource.css"

function Resource(props) {
    return(
        <a href={props.url} className="unit center links">
        <section className="Resource unit-content">
            <h3>{props.name}</h3>
            <img src={"https://verdant-server.onrender.com/images/resource_images/" + props.image} alt={props.name}/>
            <p>{props.summary}</p>
        </section>
        </a>
    );

    
}

export default Resource;