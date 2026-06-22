import "../styles/contact.css";

function Contact() {
    return (
        <section className="contact" id="contacto" data-aos="fade-up">
            <div className="contact-container">

                <div className="contact-info">
                    <span>CONTACTO</span>
                    <h2>Encuentra la propiedad ideal para ti</h2>
                    <p>
                        Agenda una asesoría personalizada y recibe opciones
                        exclusivas de acuerdo a tu estilo de vida, presupuesto
                        e intereses de inversión.
                    </p>

                    <div className="contact-data">
                        <p>📍 San Pedro Garza García, Nuevo León</p>
                        <p>📞 +52 81 0000 0000</p>
                        <p>✉️ contacto@premiumrealestate.com</p>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Nombre completo" />
                    <input type="email" placeholder="Correo electrónico" />
                    <input type="tel" placeholder="Teléfono" />

                    <select>
                        <option>Estoy interesado en...</option>
                        <option>Comprar propiedad</option>
                        <option>Vender propiedad</option>
                        <option>Invertir en bienes raíces</option>
                    </select>

                    <textarea placeholder="Mensaje"></textarea>

                    <button type="submit">
                        Solicitar asesoría
                    </button>
                </form>

            </div>
        </section>
    );
}

export default Contact;