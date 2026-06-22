import "../styles/propertyCards.css";

function PropertyCard(props) {
    return (
        <div className="property-card">
            <img src={props.image} alt={props.title} />

            <div className="property-content">
                <span className="property-type">{props.type}</span>

                <h3>{props.title}</h3>

                <p className="property-location">{props.location}</p>

                <div className="property-details">
                    <span>{props.area}</span>

                    {props.rooms > 0 && <span>{props.rooms} Rec.</span>}

                    {props.bathrooms > 0 && <span>{props.bathrooms} Baños</span>}
                </div>

                <p className="property-price">{props.price}</p>

                <button className="property-button">
    Ver propiedad
</button>
            </div>
        </div>
    );
}

export default PropertyCard;