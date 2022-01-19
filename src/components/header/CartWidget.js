import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ContextoTema} from './../../contextos/CartContext'

const CardWidget = () => {

    const {cantidadTotal, cart} = useContext(ContextoTema);

    return(
        <div className="header__container-cart">
            <div className="cart__container dropdown-trigger" data-target='shopping_cart'>
                <i className="small material-icons">shopping_cart</i>
                <span>{cantidadTotal}</span>
            </div>
            <ul id='shopping_cart' className='dropdown-content'>
                {
                    cart.length !== 0 ?
                        cart.map((producto, key) => {
                            return(
                                <li key={key}>
                                    <div className='cart__container-item'>
                                        <div className='cart__container-itemImage'>
                                            <img src={`/assets/img/productos/${producto.path}`} alt={producto.name} />
                                        </div>
                                        <div className='cart__container-itemInfo'>
                                            <div className='cart__container-itemNombre'>
                                                <span>{producto.name}</span>
                                            </div>
                                            <div className='cart__container-itemCantidad'>
                                                <span>{producto.cantidad} x  $ {producto.precio}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                        


                    :
                    <li>No hay productos</li>
                }
                {
                    cart.length !== 0 &&
                    <li className='cart__container-buttonContainer'>
                        <div className='cart__container-button'>
                            <Link to="/cart" >Finalizar compra</Link>
                        </div>
                    </li>
                }
            </ul>
        </div>
    );
}

export default CardWidget;