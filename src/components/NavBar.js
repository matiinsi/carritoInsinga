import React from "react";


const NavBar = () => {

    return(
        <header className="header__container">
            <div className="header__container-logo">
                <h1>FloresAlMundo</h1>
            </div>
            <div className="header__container-nav">
                <div class="nav__container">
                    <a href="#">
                        <span>Inicio</span>
                    </a>
                    <a href="#">
                        <span>Productos</span>
                    </a>
                    <a href="#">
                        <span>Contacto</span>
                    </a>
                </div>
            </div>
        </header>
    );
}


export default NavBar;