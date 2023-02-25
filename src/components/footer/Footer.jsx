import { BiCopyright } from "react-icons/bi"
import "./footer.css"

function Footer() {
    return ( 
        <div className="container-footer">
            <div className="footer-terms">
                <p className="link-hover">Términos de uso</p>
                <span className="span-footer">|</span>
                <p className="link-hover">Nosotros</p>
                <span className="span-footer">|</span>
                <p className="link-hover">Proveedores de datos</p>
            </div>
            <div className="footer-copy">
                <BiCopyright/> Copyright AppiWeather, 2023.
            </div>
        </div>
     );
}

export default Footer;