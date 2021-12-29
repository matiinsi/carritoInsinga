import React from 'react'
import { useParams } from 'react-router-dom';

const Cart = () => {

    let { cantidad} = useParams();

    return(
        <h1>Aquí se desarrollará la página de Cart y hay {cantidad} productos en el carrito</h1>
    )
}

export default Cart