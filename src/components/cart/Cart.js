import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {ContextoTema} from './../../contextos/CartContext'

const Cart = () => {

    const {cart, precioTotal, removeItem} = useContext(ContextoTema);

    return(
        <div className='main__container'>
            <div className='cart__container'>
                {
                    cart.length !== 0 ? 
                    <>
                        <div className='cart__container-listProducts'>
                            <div className='cart__container-listProductsTitles'>
                                <div className='cart__container-listProductTitle'>
                                    <span>Producto</span>
                                </div>
                                <div className='cart__container-listProductPrecio'>
                                    <span>Precio</span>
                                </div>
                                <div className='cart__container-listProductCantidad'>
                                    <span>Cantidad</span>
                                </div>
                                <div className='cart__container-listProductTotal'>
                                    <span>Total</span>
                                </div>
                            </div>                 
                            {
                                cart.map((producto) => {
                                    return(
                                        <div className='cart__container-listProductsItems'>
                                            <div className='cart__container-listProductsItemsInfoContainer'>
                                                <div className='cart__container-listProductsItemsRemove' onClick={() => removeItem(producto.id, producto.cantidad)} data-id={producto.id}>
                                                    <span>X</span>
                                                </div>
                                                <div className='cart__container-listProductsItemsImage'>
                                                    <img src={`/assets/img/productos/${producto.path}`} alt='Nombre imágen'/>
                                                </div>
                                                <div className='cart__container-listProductsItemsName'>
                                                    <a href="/producto/2">
                                                        <span>{producto.name}</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='cart__container-listProductsItemsPrice'>
                                                <span>$ {producto.precio}</span>
                                            </div>
                                            <div className='cart__container-listProductsItemsCantidad'>
                                                <span>{producto.cantidad}</span>
                                            </div>
                                            <div className='cart__container-listProductsItemsTotal'>
                                                <span>$ {producto.precio * producto.cantidad}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='cart__container-listProductsButtons'>
                                <Link to="/productos">Seguir comprando</Link>
                            </div>
                        </div>
                        <div className='cart__container-orderList'>
                            <div className='cart__container-orderListTitle'>
                                <span>Total del carrito</span>
                            </div>
                            <div className='cart__container-orderListSubtotalContainer'>
                                <div className='cart__container-orderListSubtotalContainerTitle'>
                                    <span>Subtotal</span>
                                </div>
                                <div className='cart__container-orderListSubtotalContainerPrice'>
                                    <span>$ {precioTotal}</span>
                                </div>
                            </div>
                            <div className='cart__container-orderListTotalContainer'>
                                <div className='cart__container-orderListTotalContainerTitle'>
                                    <span>Total</span>
                                </div>
                                <div className='cart__container-orderListTotalContainerPrice'>
                                    <span>$ {precioTotal}</span>
                                </div>
                            </div>
                            <div className='cart__container-orderListTotalButton'>
                                <button className='btn-dreams'>Finalizar compra</button>
                            </div>
                        </div>
                    </>
                    : 

                    <div className='cart__container-listProductsEmpty'>
                        <span>No se encuentran productos en el carrito</span>
                        <Link to="/productos" className='cart__container-listProductsEmptyButton'>
                            <span>¡Comprar Ahora!</span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart