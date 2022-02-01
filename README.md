# Detalles del proyecto
Se utiliza la marca de un amigo / cliente para poder trabajar en el desafio. La marca vende productos de estética automotor. 

# Archivo CartContext.js
## addItem
Función donde al hacer click en "agregar al carrito" de algún producto, verifica si el producto existe en el carrito, en caso de que exita, agrega solo la cantidad, en caso de que no exista lo agrega al mismo.

## selectItem
Función que devuelve una lista de productos que no contenga el id que se pasa por parametro

## removeItem
Función que trabaja junto con selectItem. En este caso al borrar un producto o cambiar su cantidad, guarda en una variable los productos que no contengan el ID del producto a borrar, luego se asigna a una nueva variable para actualizar el carrito

## clearCart
Función en donde vacío los estados de cantidad, total y carrito

## isInCart
Función que verifica si existe o no el producto que se pasa por parámetro.

# Estilos
Se utilizo SASS para generar los estilos del proyecto. Los archivos se encuentran en src/scss y compila en css/styles.css.


# Versión de Node
Se trabajo con la versión v12.22.7


# Dependencias extras utilizadas
swiper@6.8.4
materialize-css@1.0.0
node-sass@6.0.1


# Levantar el proyecto en develop
### `npm start`


# Deploy del proyecto para produccion
### `npm run build`