import "../styles/about.css";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">

                <div className="about-image" data-aos="fade-right">
                    <img
                        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
                        alt="Luxury Real Estate"
                    />
                </div>

                <div className="about-content" data-aos="fade-left">

                    <span className="about-subtitle">
                        SOBRE NOSOTROS
                    </span>

                    <h2>
                        Creamos experiencias inmobiliarias excepcionales
                    </h2>

                    <p>
                        Somos especialistas en propiedades residenciales
                        premium, ofreciendo asesoría personalizada para
                        compradores e inversionistas que buscan exclusividad,
                        plusvalía y calidad de vida.
                    </p>

                    <div className="about-features">
                        <div>✓ Propiedades exclusivas</div>
                        <div>✓ Asesoría personalizada</div>
                        <div>✓ Ubicaciones privilegiadas</div>
                    </div>

                    <button className="about-btn">
                        Conocer más
                    </button>

                </div>

            </div>
        </section>
    );
}

export default About;