import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return(
        <header className="header__container">
            <div className="header__container-logo">
                <a href="/">
                    <img src="/assets/img/logo.png" alt="Dreams Detailing Products" />
                </a>
            </div>
            <div className="header__container-nav">
                <div className="nav__container">
                    <NavLink to="/">
                        <span>Inicio</span>
                    </NavLink>
                    <NavLink to="/productos">
                        <span>Productos</span>
                    </NavLink>
                    <NavLink to="/contacto">
                        <span>Contacto</span>
                    </NavLink>
                </div>
            </div>
            <CartWidget ctnProductos={5} />
            
        </header>
    );
}


export default NavBar;