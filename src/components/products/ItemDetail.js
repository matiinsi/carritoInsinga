import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({productSelected}) => {
    
    return(
        productSelected.map((producto, key) => {
            return (
                <div key={key}>
                    <div className="product__container-image">
                        <img src={`/assets/img/productos/${producto.path}`} alt={producto.name} />
                    </div>
                    <div className="product__container-texts">
                        <h2>{producto.name}</h2>
                        <p>{producto.description}</p>
                        <div className='product__container-info'>
                            <div className="product__container-stock">
                                <strong>Stock:</strong> <span>{producto.stock}</span>
                            </div>
                            <div className="product__container-price">
                                <strong>$ {producto.price}</strong>
                            </div>
                        </div>
                        <ItemCount initial={1} stock={producto.stock} producto={producto} />
                    </div>  
                </div>
            )
        })
    )
}

export default ItemDetail