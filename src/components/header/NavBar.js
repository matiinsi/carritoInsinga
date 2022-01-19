import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import M from "materialize-css"

const NavBar = ({Categorias}) => {

    useEffect(() => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems);
    }, [])

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
                    <NavLink to="#" className="dropdown-trigger" data-target='categorias'>
                        <span>Categorias</span>
                    </NavLink>
                        <ul id='categorias' className='dropdown-content'>
                            {
                                Categorias.map((cat, key) => {
                                    return(
                                        <li key={key}>
                                            <NavLink to={`/categoria/${cat.key}`}>{cat.name}</NavLink>
                                        </li>)
                                })
                            }
                        </ul>
                    <NavLink to="/contacto">
                        <span>Contacto</span>
                    </NavLink>
                </div>
            </div>
            <CartWidget />
        </header>
    );
}


export default NavBar;