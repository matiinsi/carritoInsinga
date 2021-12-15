import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    // State contador de productos
    const [contador, setContador] = useState(initial);

    return(
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/img/productos/producto1.jpg" alt="Producto 1" />
                    </div>
                    <div className="card-content">
                        <div>
                            <h3>Producto 1</h3>
                            <strong>$ 700</strong>
                        </div>
                        <p>lorem impsu lorem lorem</p>
                    </div>
                    <div className="card-action" onSubmit={(e) => e.preventDefault()}>
                        <form className="addCard__container">
                            <div className="addCard__container-counter">
                                <div className="value-button" id="decrease" onClick={() => setContador((contador === 0) ? contador : contador - 1 )}>-</div>
                                <input type="number" id="number" value={contador}  />
                                <div className="value-button" id="increase" onClick={() => setContador((contador === stock) ? contador : contador + 1)}>+</div>
                            </div>
                            <div className="addCard__container-submit">
                                <button className="btn waves-effect waves-light" onClick={() => {(contador !== 0) ? onAdd(contador) : console.log('No hay stock')}} type="submit">Agregar al carrito
                                    <i className="material-icons right">send</i>
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