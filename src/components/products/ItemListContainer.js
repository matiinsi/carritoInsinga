import React from "react";
import ItemList from './ItemList';

function onAdd(cantidad) {
    if (cantidad !== 0) {
        console.log(`Se agrego ${cantidad} productos al carrito`)
    } else {
        console.log(`El producto no contiene stock`)
    }
    
}

const ItemListContainer = () => {
    return(
        <main className="main__container">
            <div className="main__container-products">
                <ItemList onAdd={onAdd} />
            </div>
        </main>
    );
}

export default ItemListContainer;