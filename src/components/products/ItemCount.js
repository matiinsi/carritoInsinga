import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    // State contador de productos
    const [contador, setContador] = useState(initial);

    return(
        <div className="card-action" onSubmit={(e) => e.preventDefault()}>
        <form className="addCard__container">
            <div className="addCard__container-counter">
                <div className="value-button" id="decrease" onClick={() => setContador((contador === 0) ? contador : contador - 1 )}>-</div>
                <input type="number" id="number" value={contador}  />
                <div className="value-button" id="increase" onClick={() => setContador((contador === stock) ? contador : contador + 1)}>+</div>
            </div>
            <div className="addCard__container-submit">
                <button className="btn waves-effect waves-light" onClick={() => onAdd(contador) } type="submit">Agregar al carrito
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </form>
    </div>
    );
}

export default ItemCount;