import React, {useState} from 'react'

const ContextoTema = React.createContext();

const CustomProvieder = ({children}) => {

    const [cart, setCart] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)


    const addItem = (producto) => {

        if (cart.length !== 0) {
            if (isInCart(producto.id)) {

                // Guardo el producto elegido
                const productSelected = selectItem(producto.id)

                // Lo elimino del cart
                const listBefore = removeItem(producto.id)

                // Actualizo la lista de productos
                productSelected[0].cantidad = productSelected[0].cantidad + producto.cantidad

                // Actualizo el cart
                setCart(listBefore, productSelected)
                setPrecioTotal((productSelected[0].cantidad * productSelected[0].precio) + precioTotal)
                console.log(cart)

                
            } else {
                setCart([...cart, producto])
                setPrecioTotal((producto.cantidad * producto.precio) + precioTotal)
                console.log(cart);
            }
        } else {
            setCart([producto])
            console.log(cart);
        }

        
        
    }

    const selectItem = (id) => {
        return cart.filter((product) => product.id === id)
    }

    const removeItem = (id) => {
        return cart.filter(producto => producto.id !== id);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const valorDelContexto = {
        cart,
        precioTotal,
        cantidadTotal,
        addItem,
        removeItem,
        clearCart
    }


    return(
        <ContextoTema.Provider value={valorDelContexto}>
            {children}
        </ContextoTema.Provider>
        
    );
}

export { ContextoTema, CustomProvieder }