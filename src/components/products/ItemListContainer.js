import React, {useState, useEffect} from "react";
import ItemList from './ItemList';


function onAdd(cantidad) {
    if (cantidad !== 0) {
        console.log(`Se agrego ${cantidad} productos al carrito`)
    } else {
        console.log(`El producto no contiene stock`)
    }
    
}

const ItemListContainer = ({Productos}) => {

    // State vació para agregar los los productos
    let [listProductos, setListProductos] = useState([])

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
            })
            .catch(() => {
                console.log('Error')
            })

    }, [Productos]);
    
        
    return(
        <main className="main__container">
            <div className="main__container-products">
                <ItemList onAdd={onAdd} listProductos={listProductos} />
            </div>
        </main>
    );
}

export default ItemListContainer;