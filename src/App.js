import React, {useState} from "react"
import ItemListContainer from "./components/products/ItemListContainer";
import NavBar from "./components/header/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import Cart from './components/cart/Cart';
import Categories from './components/categories/Categories';
import {CustomProvieder} from './contextos/CartContext'

const Categorias = [
    {
        "id": 1,
        "name": "Desengrasantes"
    },
    {
        "id": 2,
        "name": "Shampoo"
    },
    {
        "id": 3,
        "name": "Acondicionadres"
    }
]

const Productos = [
    {
        "id": 1,
        "name": "Producto 1",
        "stock": 5,
        "price": 400,
        "description": "lorem impsu lorem lorem",
        "path" : "producto1.jpg",
        "categoria" : 2
    },
    {
        "id": 2,
        "name": "Producto 2",
        "stock": 10,
        "price": 700,
        "description": "lorem impsu lorem lorem",
        "path" : "producto2.jpg",
        "categoria" : 1
    },
    {
        "id": 3,
        "name": "Producto 3",
        "stock": 4,
        "price": 1000,
        "description": "lorem impsu lorem lorem",
        "path" : "producto3.jpg",
        "categoria" : 3
    }

]


const App = () => {

    //State con info del producto
    const [cart, setCart] = useState([]);

    function onAdd(producto) {
                
        if (producto.cantidad !== 0) {
            setCart([...cart, producto]);
        } else {
            console.log(`El producto no contiene stock`)
        }
    }

    return(
        <CustomProvieder>
            <Router>
                <NavBar Categorias={Categorias} />
                <Routes>
                    <Route path="/" element={<ItemListContainer Productos={Productos} onAdd={onAdd} />} />
                    <Route path="/productos" element={<ItemListContainer Productos={Productos} onAdd={onAdd} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer Productos={Productos} onAdd={onAdd} />} />
                    <Route path="/categoria/:id" element={<Categories Productos={Productos} onAdd={onAdd} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CustomProvieder>
    );
}

export default App;