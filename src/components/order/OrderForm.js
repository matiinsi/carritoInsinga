import React, {useContext, useState} from "react";
import { useEffect } from "react/cjs/react.development";
import {ContextoTema} from './../../contextos/CartContext'
import {getFirestore} from './../../firebase/conexion';

const OrderForm = () => {

    const db = getFirestore(),
        orders = db.collection("orders"),
        date = new Date();

    const {cart, precioTotal, clearCart} = useContext(ContextoTema);

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState(0)
    const [orderSend, setOrderSend] = useState(false)
    const [order, setOrder] = useState(
        {
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            total: precioTotal,
            items: cart
        }
    )
 
    useEffect(() =>{
        setOrder({
            ...order,
            buyer: {
                name: name,
                phone: phone,
                email: email
            }
        })
    }, [name, email, phone])

    const orderProcess = (e) => {
        e.preventDefault();

        orders.add(order).then(({id}) => {
            setIdOrder(id)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setOrderSend(true)
            clearCart()
            console.log(order)
        });
    }

    return(
        <div className="main__container">
            <div className="main__container-orderConfirm">
                {
                    (orderSend !== true) ?
                
                        <form id="formOrder" onSubmit={(e) => orderProcess(e)}>
                            <div className="orderConfirm__dates">       
                                <div className="orderConfirm__dates-container">
                                    <div className="orderConfirm__dates-container-title">
                                        <h3>Detalles de la entrega</h3>
                                    </div>
                                    <div className="orderConfirm__dates-container-form">
                                        <div className="form__container-groupDouble">
                                            <input 
                                                type="text" 
                                                id="name" 
                                                placeholder="Nombre"
                                                required="required"
                                                value={name}
                                                onChange={(e)=> setName(e.target.value)}
                                            />
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                placeholder="Teléfono"
                                                required="required"
                                                value={phone}
                                                onChange={(e)=> setPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className="form__container-groupInLine">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                placeholder="Email"
                                                required="required"
                                                value={email}
                                                onChange={(e)=> setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="orderConfirm__detail">
                                <div className="cart__container-orderListproducts">
                                {
                                    cart.map((producto) => {
                                        return(
                                            <div className='cart__container-listProductsItems' key={producto.id}>
                                                <div className='cart__container-listProductsItemsInfoContainer'>
                                                    <div className='cart__container-listProductsItemsName'>
                                                        <a href="/producto/2">
                                                            <span>{producto.name}</span> X
                                                            <span> {producto.cantidad}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='cart__container-listProductsItemsTotal'>
                                                    <span>$ {producto.precio * producto.cantidad}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
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
                                    <button type="submit" className='btn-dreams'>Terminar compra</button>
                                </div>
                            </div>
                        </form>
                    :
                        <div className="orderConfirm__container-confirm">
                           <span> La orden <strong>{idOrder}</strong> fue enviada con éxito.</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default OrderForm;