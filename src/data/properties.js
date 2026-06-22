import departamento1 from "../assets/img/departamento.jpg";
import casa1 from "../assets/img/casa.jpg";
import terreno1 from "../assets/img/terreno.jpg";

const properties = [
  {
    id: 1,
    title: "Departamento Premium",
    location: "Guadalajara",
    price: "$4,200,000",
    image: departamento1,
    type: "Departamento",
    rooms: 3,
    bathrooms: 2,
    area: "120 m²"
  },

    {
    id: 2,
    title: "Casa Residencial",
    type: "Casa",
    location: "Monterrey",
    price: "$5,800,000",
    area: "280 m²",
    rooms: 4,
    bathrooms: 3,
    image: casa1
  },
   {
    id: 3,
    title: "Terreno Exclusivo",
    type: "Terreno",
    location: "Querétaro",
    price: "$2,900,000",
    area: "450 m²",
    rooms: 0,
    bathrooms: 0,
    image: terreno1
  }
];

export default properties;