import "../styles/hero.css";
import heroBuilding from "../assets/img/hero-building.png";

function Hero() {
    return (
        <section
        id="inicio"
            className="hero"
            style={{ backgroundImage: `url(${heroBuilding})` }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <span className="hero-tag">PROPIEDADES EXCLUSIVAS</span>

                    <h1>
                        Encuentra la propiedad de tus <span>sueños</span>
                    </h1>

                    <div className="hero-line"></div>

                    <p>
                        Departamentos modernos, casas de lujo y terrenos premium
                        en las mejores ubicaciones. Invierte en tu futuro,
                        construye tu patrimonio.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Ver Propiedades</button>
                        <button className="btn-secondary">Contactar Asesor</button>
                    </div>
                    <div className="hero-stats">
    <div>
        <strong>500+</strong>
        <span>Propiedades</span>
    </div>

    <div>
        <strong>15+</strong>
        <span>Años</span>
    </div>

    <div>
        <strong>120+</strong>
        <span>Clientes</span>
    </div>
</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;