import {useState} from 'react';

const ItemCount = ({producto}) => {

    // State contador de productos
    const [contador, setContador] = useState(0);

    return(
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={`/assets/img/productos/${producto.path}`} alt={producto.name} />
                    </div>
                    <div className="card-content">
                        <div>
                            <h3>{producto.name}</h3>
                            <strong>$ {producto.price}</strong>
                        </div>
                        <p>{producto.description}</p>
                    </div>
                    <div className="card-action">
                        <form className="addCard__container">
                            <div className="addCard__container-counter">
                                <div className="value-button" id="decrease" onClick={() => setContador((contador === 0) ? contador : contador - 1 )}>-</div>
                                <input type="number" id="number" value={contador} />
                                <div className="value-button" id="increase" onClick={() => setContador((contador === producto.stock) ? contador : contador + 1)}>+</div>
                            </div>
                            <div className="addCard__container-submit">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Agregar al carrito
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;