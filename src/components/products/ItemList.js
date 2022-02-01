import React from 'react'
import Item from './Item'


const ItemList = ({listProductos}) => {

    return(
        <div className="products__container">
            {
                listProductos.map((producto, key) => {
                    return (
                        <div key={key}>
                            <Item producto={producto} />
                        </div>
                    )
                })
            }
            
        </div> 
    )
}

export default ItemList