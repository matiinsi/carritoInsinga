import React from "react";
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
                    <a href="/">
                        <span>Inicio</span>
                    </a>
                    <a href="/productos">
                        <span>Productos</span>
                    </a>
                    <a href="/contacto">
                        <span>Contacto</span>
                    </a>
                </div>
            </div>
            <CartWidget ctnProductos={5} />
        </header>
    );
}


export default NavBar;