import properties from "../data/properties";
import PropertyCard from "./PropertyCard";
import "../styles/featuredProperties.css";

function FeaturedProperties() {
    return (
         <section id="propiedades" className="featured-properties" data-aos="fade-up">
            <h2 className="featured-title">Propiedades Destacadas</h2>

             <div className="properties-grid">
                {properties.map((property) => (
                   <PropertyCard
    key={property.id}
    title={property.title}
    type={property.type}
    location={property.location}
    price={property.price}
    area={property.area}
    rooms={property.rooms}
    bathrooms={property.bathrooms}
    image={property.image}
/>
                ))}
             </div>
         </section>

    );

}

export default FeaturedProperties;