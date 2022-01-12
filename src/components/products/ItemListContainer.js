import React, {useState, useEffect} from "react";
import Slider from "../slider/Slider";
import ItemList from './ItemList';


const ItemListContainer = ({Productos, onAdd}) => {

    // State vació para agregar los los productos
    let [listProductos, setListProductos] = useState([])

    // State de loading
    let [loading, setLoading] = useState(true);

    // Cargo los productos con una promesa
    useEffect(() => {
        const CargoProducto =  new Promise((res, rej) => {
            setTimeout(() => {
                res(Productos)
            }, 3000)
        })
        CargoProducto
            .then((productos) => {
                setListProductos(productos)
                setLoading(false)
            })
            .catch(() => {
                console.log('Error')
            })

    }, [Productos]);
    
        
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
                        <ItemList onAdd={onAdd} listProductos={listProductos} />
                }
               
            </div>
        </main>
    );
}

export default ItemListContainer;