import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams } from 'react-router-dom'


const ItemDetailContainer = ({Productos, onAdd}) => {

    // State de loading
    let [loading, setLoading] = useState(true);

    let { id } = useParams();

    // State vació para agregar los productos
    let [productSelected, setProductSelected] = useState([])

    // Cargo los productos con una promesa
    useEffect(() => {
        const CargoProducto =  new Promise((res, rej) => {
            setTimeout(() => {
                res(Productos)
            }, 2000)
        })
        CargoProducto
            .then((productos) => {
                let filterProduct = productos.filter(producto => producto.id === parseInt(id) );
                setProductSelected(filterProduct)
                setLoading(false);

            })
            .catch(() => {
                console.log('Error')
            })

    }, [id, Productos]);

    return(
        <>
            {
                loading === true ?
                    <div className="loading__container">
                        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                :
                <main className="main__container">
                    <div className="main__container-product">
                        <ItemDetail productSelected={productSelected} onAdd={onAdd} />
                    </div>
                </main>
            }
        </>
        
    )
}

export default ItemDetailContainer;