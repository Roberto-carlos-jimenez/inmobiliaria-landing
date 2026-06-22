import "../styles/testimonials.css";

function Testimonials() {

    const testimonials = [
        {
            name: "Carlos Mendoza",
            text: "Encontramos la casa ideal para nuestra familia. El proceso fue rápido y completamente transparente."
        },
        {
            name: "María González",
            text: "Excelente atención y asesoría durante toda la compra. Totalmente recomendados."
        },
        {
            name: "Jorge Ramírez",
            text: "Invertí en una propiedad con gran plusvalía gracias a sus recomendaciones."
        }
    ];

    return (
        <section className="testimonials" data-aos="fade-up">

            <div className="section-header">
                <span>TESTIMONIOS</span>
                <h2>Lo que dicen nuestros clientes</h2>
            </div>

            <div className="testimonials-grid">

                {testimonials.map((item, index) => (
                    <div className="testimonial-card" key={index}>

                        <div className="stars">
                            ★★★★★
                        </div>

                        <p>{item.text}</p>

                        <h4>{item.name}</h4>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Testimonials;