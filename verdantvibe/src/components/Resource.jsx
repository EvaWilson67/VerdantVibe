import "./css/Resource.css"

function Resource(props) {
    return(
        <a href={props.url} class="unit center links">
        <section className="Resource unit-content">
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <p>{props.description}</p>

        </section>
        </a>
    );

    
}

export default Resource;