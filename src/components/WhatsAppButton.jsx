import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/529222203870?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20propiedades."
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppButton;