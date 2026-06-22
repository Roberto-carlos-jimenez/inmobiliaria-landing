import "../styles/stats.css";

function Stats() {
    return (
        <section className="stats">
            <div className="stats-container">

                <div className="stat-item">
                    <h3>500+</h3>
                    <p>Propiedades vendidas</p>
                </div>

                <div className="stat-item">
                    <h3>15+</h3>
                    <p>Años de experiencia</p>
                </div>

                <div className="stat-item">
                    <h3>120+</h3>
                    <p>Clientes satisfechos</p>
                </div>

                <div className="stat-item">
                    <h3>98%</h3>
                    <p>Tasa de satisfacción</p>
                </div>

            </div>
        </section>
    );
}

export default Stats;