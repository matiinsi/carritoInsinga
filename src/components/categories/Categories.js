import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../products/ItemList';
import {getFirestore} from '../../firebase/conexion';

const Categories = ({Productos}) => {

    let {id} = useParams();

    // State vació para agregar los productos
    let [listProductos, setListProductos] = useState([])

    // Cargo los productos con una promesa
    useEffect(() => {
        const db = getFirestore()
        const listProducts = db.collection('items');
        const productAndCategoryId = listProducts.where('categoryId', '==', parseInt(id))


        productAndCategoryId.get().then((querySnapchot) => {
            setListProductos(querySnapchot.docs.map(product => product.data()));
        }).catch((error) => {
            console.log(error)
        })

    }, [id, listProductos]);


    return(
        <main className="main__container">
            <div className="main__container-products">
                <ItemList listProductos={listProductos} />
            </div>
        </main>
    )
}

export default Categories;