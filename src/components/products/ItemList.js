import React from 'react'
import Item from './Item'


const ItemList = ({onAdd, listProductos, contador, setContador}) => {

    return(
        <div className="products__container">
            {
                listProductos.map((producto, key) => {
                    return (
                        <div key={key}>
                            <Item onAdd={onAdd} producto={producto} contador={contador} setContador={setContador}/>
                        </div>
                    )
                })
            }
            
        </div> 
    )
}

export default ItemList