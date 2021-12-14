import React from "react";
import ItemCount from "./ItemCount";
import Productos from "./../products.json";

const ItemListContainer = () => {
    return(
        <main className="main__container">
            <div className="main__container-products">
                <div className="products__container">
                    {
                        Productos.map((producto, index) => {
                            return (
                                <div key={index}>
                                    <ItemCount producto={producto} />
                                </div>
                            )  
                        })
                    }
                      
                </div> 
            </div>
        </main>
    );
}

export default ItemListContainer;