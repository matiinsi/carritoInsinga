import React from 'react'
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";


const Item = ({onAdd, producto}) => {
    return(
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={`/assets/img/productos/${producto.path}`} alt={producto.name} />
                    </div>
                    <div className="card-content">
                        <div>
                            <Link to={`producto/${producto.id}`}><h3>{producto.name} - ({producto.stock})</h3></Link>
                            <strong>$ {producto.price}</strong>
                        </div>
                        <p>{producto.description}</p>
                    </div>
                    <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
                </div>
            </div>
        </div>
    )
}

export default Item;