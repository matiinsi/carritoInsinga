
const CardWidget = ({ctnProductos}) => {
    
    return(
        <div className="header__container-cart">
            <div className="cart__container">
                <i className="small material-icons">shopping_cart</i>
                <span>{ctnProductos}</span>
            </div>
        </div>
    );
}

export default CardWidget;