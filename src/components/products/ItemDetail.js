import React, {useEffect} from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({productSelected, onAdd}) => {
    
    useEffect(() => {
        console.log(productSelected)
    }, [productSelected])

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
                        <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
                    </div>  
                </div>
            )
        })
    )
}

export default ItemDetail