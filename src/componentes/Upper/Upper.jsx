import  React from "react";
import Contacto from "../Subpaginas/Contacto/Contacto";
import "./Upper.css";
import Logo from "./img/neondvds.png"
import { NavLink } from "react-router-dom";

const Upper = () => {
    return(
        <div className="barrasuperior">
            <NavLink to="/" className="logopagina">
                <img className="logoupper" src={Logo}/>
                <div className="titulo"> PELIJUEGOS</div>
            </NavLink>

            <ul className="navbaropciones">
                <li className="navbaropt">
                    <NavLink to="/src/componentes/Subpaginas/Contacto/Contacto" className="navbaropt">Contacto</NavLink>
                </li>
                <li className="navbaropt">
                    <NavLink to="/src/componentes/Subpaginas/Compra/Compra" className="navbaropt">Comprar</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Upper;