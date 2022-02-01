import React, {useState} from 'react'

const ContextoTema = React.createContext();

const CustomProvieder = ({children}) => {

    const [cart, setCart] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)


    let addItem = (producto) => {

        if (cart.length !== 0) {
            if (isInCart(producto.id)) {

                const findPorId = cart.findIndex(
                    prod => prod.id === producto.id
                );
                const nuevaCantidad = cart[findPorId].cantidad + producto.cantidad;

                const listaViejaDeProductos = selectItem(producto.id)

                const listaDeProductos = [
                    ...listaViejaDeProductos,
                    {
                        name: cart[findPorId].name,
                        cantidad: nuevaCantidad,
                        id: producto.id,
                        precio: producto.precio,
                        path: producto.path
                    },
                ];

                setCart(listaDeProductos);

                // Sumo el total de productos
                setCantidadTotal((cantidadTotal - cart[findPorId].cantidad) + nuevaCantidad);

                // Sumo el precio total
                setPrecioTotal((producto.cantidad * producto.precio) + precioTotal)
                
            } else {
                setCart([...cart, producto])
                setPrecioTotal((producto.cantidad * producto.precio) + precioTotal)

                // Sumo el total de productos
                setCantidadTotal(producto.cantidad + cantidadTotal);
            }
        } else {
            setCart([producto])

            // Sumo el precio total
            setPrecioTotal((producto.cantidad * producto.precio) + precioTotal)

            // Sumo el total de productos
            setCantidadTotal(producto.cantidad);
        }       
        
    }

    const selectItem = (id) => {
        return cart.filter((product) => product.id !== id)
    }

    const removeItem = (id, cantidad) => {

        const listaViejaDeProductos = selectItem(id)
        
        const listaDeProductos = [
            ...listaViejaDeProductos
        ];

        setCart(listaDeProductos);

        // Elimino el producto del total
        setCantidadTotal(cantidadTotal - cantidad)
    }

    const clearCart = () => {
        setCart([])
        setCantidadTotal(0)
        setPrecioTotal(0)
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