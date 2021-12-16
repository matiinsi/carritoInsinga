import React, {useEffect, useState} from 'react'
import Item from './Item'

const Productos = [
    {
        "id": 1,
        "name": "Producto 1",
        "stock": 5,
        "price": 400,
        "description": "lorem impsu lorem lorem",
        "path" : "producto1.jpg"
    },
    {
        "id": 2,
        "name": "Producto 2",
        "stock": 10,
        "price": 700,
        "description": "lorem impsu lorem lorem",
        "path" : "producto2.jpg"
    },
    {
        "id": 3,
        "name": "Producto 3",
        "stock": 4,
        "price": 1000,
        "description": "lorem impsu lorem lorem",
        "path" : "producto3.jpg"
    }

]

const ItemList = ({onAdd}) => {

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

    }, []);
    
    return(
        <div className="products__container">
            {
                listProductos.map((producto) => {
                    return <Item onAdd={onAdd} producto={producto}/>
                })
            }
            
        </div> 
    )
}

export default ItemList