import React from "react";
import ItemCount from "./ItemCount";

function onAdd(cantidad) {
    console.log(`Se agrego ${cantidad} productos al carrito`)
}

const ItemListContainer = () => {
    return(
        <main className="main__container">
            <div className="main__container-products">
                <div className="products__container">
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                </div> 
            </div>
        </main>
    );
}

export default ItemListContainer;