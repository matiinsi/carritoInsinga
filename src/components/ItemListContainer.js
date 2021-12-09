import React from "react";

const ItemListContainer = ({catalogo}) => {
    return(
        <main className="main__container">
            <div className="main__container-products">
                <h1>{catalogo}</h1>
            </div>
        </main>
    );
}

export default ItemListContainer