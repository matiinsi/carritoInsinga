import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return(
        <>
            <NavBar />
            <ItemListContainer catalogo={"Aqui irá el catálogo de productos"}/>
        </>
    );
}

export default App;