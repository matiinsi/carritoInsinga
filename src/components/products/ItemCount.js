import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {ContextoTema} from './../../contextos/CartContext'

const ItemCount = ({initial, producto}) => {

    const {addItem} = useContext(ContextoTema);

    // State contador de productos
    const [contador, setContador] = useState(initial);

    // State para verificar si se dio click en "agregar al carrito"
    const [addCartActive, setAddCartActive] = useState(false);


    return(
        <div className="card-action" onSubmit={(e) => e.preventDefault()}>
        <form className="addCard__container">
            <div className="addCard__container-counter">
                <div className="value-button" id="decrease" onClick={() => setContador((contador === 0) ? contador : contador - 1 )}>-</div>
                <input type="number" id="number" value={contador}  />
                <div className="value-button" id="increase" onClick={() => setContador((contador === producto.stock) ? contador : contador + 1)}>+</div>
            </div>
            <div className="addCard__container-submit">
                {addCartActive === false ? 
                    <button className="btn waves-effect waves-light" 
                        onClick={ () => {
                                addItem({id: producto.id, name: producto.name, cantidad: contador, precio: producto.price, path: producto.path}); 
                                setAddCartActive(true);
                            }
                        } 
                        type="submit">Agregar al carrito
                        <i className="material-icons right">send</i>
                    </button>

                    : 
                    <Link to="/cart" className="btn waves-effect waves-light" type="submit">Ir al carrito
                        <i className="material-icons right">send</i>
                    </Link>
                }
            </div>
        </form>
    </div>
    );
}

export default ItemCount;