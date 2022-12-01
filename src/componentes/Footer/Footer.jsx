import  React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import wsp from './img/iconmonstr-whatsapp-1.svg'

const Footer = () => {
    return(
        <div className="papafooter ">
                <div className="midfoot claro1 buttons">
                    <a class="fa fa-whatsapp" aria-hidden="true"></a>
                    <a class="fa fa-instagram" aria-hidden="true"></a>
                    <a class="fa fa-facebook" aria-hidden="true"></a>
                </div>
                <div className="botfoot claro1">powered by Rodrigo</div>
        </div>
    )
}

export default Footer;