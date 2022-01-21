import React, {useState, useEffect} from "react"
import ItemListContainer from "./components/products/ItemListContainer";
import NavBar from "./components/header/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import Cart from './components/cart/Cart';
import Categories from './components/categories/Categories';
import {CustomProvieder} from './contextos/CartContext';
import OrderForm from './components/order/OrderForm';
import {getFirestore} from './firebase/conexion';


const App = () => {

    // State con productos
    const [productos, setProductos] = useState([])

    // State con categorias

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const listProducts = db.collection('items');
        const listCategories = db.collection('categorys');

        listProducts.get().then((querySnapchot) => {

            const listProductsFirestore = querySnapchot.docs.map((product) => {
                return {...product.data(), id: product.id}
            })

            setProductos(listProductsFirestore);
        }).catch((error) => {
            console.log(error)
        })

        listCategories.get().then((querySnapchot) => {

            setCategorias(querySnapchot.docs.map(cat => cat.data()));
        }).catch((error) => {
            console.log(error)
        })

    }, [])



    return(
        <CustomProvieder>
            <Router>
                <NavBar Categorias={categorias} />
                <Routes>
                    <Route path="/" element={<ItemListContainer Productos={productos}  />} />
                    <Route path="/productos" element={<ItemListContainer Productos={productos} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer Productos={productos} />} />
                    <Route path="/categoria/:id" element={<Categories Productos={productos} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<OrderForm />} />
                </Routes>
            </Router>
        </CustomProvieder>
    );
}

export default App;