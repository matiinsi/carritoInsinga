import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams } from 'react-router-dom'


const ItemDetailContainer = ({Productos}) => {

    // State de loading
    let [loading, setLoading] = useState(true);

    let { id } = useParams();

    // State vació para agregar los productos
    let [productSelected, setProductSelected] = useState([])


    // Cargo los productos con una promesa
    useEffect(() => {
        let filterProduct = Productos.filter(producto => producto.id === id );
                setProductSelected(filterProduct)
                setLoading(false);

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
                        {
                            productSelected.length > 0 ?
                                <ItemDetail productSelected={productSelected} />
                            :
                            <div className='main__container-product-clean'>
                                <p>No se encuentran productos</p>
                            </div>
                        }
                    </div>
                </main>
            }
        </>
        
    )
}

export default ItemDetailContainer;