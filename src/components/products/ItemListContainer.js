import React from "react";
import Slider from "../slider/Slider";
import ItemList from './ItemList';


const ItemListContainer = ({Productos, loading}) => {
    
        
    return(
        <main className="main__container">
            <Slider />
            <div className="main__container-products">
                {
                    loading === true ?  
                        <div className="loading__container">
                            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    :
                        <ItemList listProductos={Productos} />
                }
               
            </div>
        </main>
    );
}

export default ItemListContainer;