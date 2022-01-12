import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../products/ItemList';

const Categories = ({Productos, onAdd}) => {

    let {id} = useParams();

    // State vació para agregar los productos
    let [listProductos, setListProductos] = useState([])

    // Cargo los productos con una promesa
    useEffect(() => {
        const CargoProducto =  new Promise((res, rej) => {
            setTimeout(() => {
                res(Productos)
            }, 2000)
        })
        CargoProducto
            .then((productos) => {
                let filterProduct = productos.filter(producto => producto.categoria === parseInt(id) );
                setListProductos(filterProduct)

            })
            .catch(() => {
                console.log('Error')
            })

    }, [id, Productos]);


    return(
        <main className="main__container">
            <div className="main__container-products">
                <ItemList listProductos={listProductos} onAdd={onAdd} />
            </div>
        </main>
    )
}

export default Categories;