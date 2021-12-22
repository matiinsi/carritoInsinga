import ItemListContainer from "./components/products/ItemListContainer";
import NavBar from "./components/header/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from "./components/products/ItemDetailContainer";

const Productos = [
    {
        "id": 1,
        "name": "Producto 1",
        "stock": 5,
        "price": 400,
        "description": "lorem impsu lorem lorem",
        "path" : "producto1.jpg"
    },
    {
        "id": 2,
        "name": "Producto 2",
        "stock": 10,
        "price": 700,
        "description": "lorem impsu lorem lorem",
        "path" : "producto2.jpg"
    },
    {
        "id": 3,
        "name": "Producto 3",
        "stock": 4,
        "price": 1000,
        "description": "lorem impsu lorem lorem",
        "path" : "producto3.jpg"
    }

]


const App = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer Productos={Productos} />} />
                <Route path="/producto/:id" element={<ItemDetailContainer Productos={Productos} />} />
            </Routes>
        </Router>
    );
}

export default App;