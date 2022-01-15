import React, {useState} from 'react'

const ContextoTema = React.createContext();

const CustomProvieder = ({children}) => {

    const [cart, setCart] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)


    const addItem = (producto) => {

        if (cart.length !== 0) {
            if (isInCart(producto.id)) {

                // Filtro el indice del producto
                const findPorId = cart.findIndex(
                    prod => prod.id === producto.id
                );

                // Actualizo la cantidad del producto
                const nuevaCantidad = cart[findPorId].cantidad + producto.cantidad;

                // Nueva lista de items sin el id seleccionado
                const listaViejaDeProductos = selectItem(producto.id)

                console.log(listaViejaDeProductos)

                // Actualizo el cart
                const listaDeProductos = [
                    ...listaViejaDeProductos,
                    {
                        name: cart[findPorId].name,
                        cantidad: nuevaCantidad,
                        id: producto.id,
                        precio: producto.precio
                    },
                ];

                setCart(listaDeProductos);

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
        return cart.filter((product) => product.id !== id)
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