import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <span className="logo-icon">▣</span>
                <div>
                    <h2>INMOBILIARIA</h2>
                    <p>PREMIUM</p>
                </div>
            </div>

            <ul className="nav-links">
                 <li><a href="#">Inicio</a></li>
                <li><a href="#propiedades">Propiedades</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

            <button className="nav-btn">
                Asesoría Personalizada
            </button>

            <button className="menu-btn">
                ☰
            </button>

        </nav>
    );
}

export default Navbar;