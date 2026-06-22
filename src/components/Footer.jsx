import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h3>Luxury Real Estate</h3>

                    <p>
                        Especialistas en propiedades premium,
                        inversión inmobiliaria y experiencias
                        residenciales exclusivas.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Enlaces</h4>

                    <a href="#inicio">Inicio</a>
                    <a href="#propiedades">Propiedades</a>
                    <a href="#about">Nosotros</a>
                    <a href="#contacto">Contacto</a>
                </div>

                <div className="footer-contact">
                    <h4>Contacto</h4>

                    <p>📍 San Pedro Garza García</p>
                    <p>📞 +52 81 0000 0000</p>
                    <p>✉️ contacto@luxuryrealestate.com</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Luxury Real Estate. Todos los derechos reservados.
            </div>

        </footer>
    );
}

export default Footer;