# Ecommerce ViperG
Tienda de ropa unisex para Coderhouse creada con React.

## Uso de la App
* Ingresando a la pagina web, el usuario podra ver todos los productos disponibles.

* Clickeando en ver detalle, podra ingresar la cantidad de productos que quiere comprar, o volver a la pagina de inicio para solicitar otro producto.

* Cada producto agregado se ve en el carrito, al que se accede haciendo click en el icono del mismo (arriba a la derecha).

* Para realizar la compra, debe ingresar al carrito, clickear en confirmar compra, y completar el formulario con sus datos.

* Desde allí se recibira la orden de compra en la base de datos de Firebase.

## Dependencias
[Firebase](https://firebase.google.com/)	
Utilizo Firebase para poder guardar en una base de datos (Firestore) los productos que se muestran en el sitio con todas sus características. También genero una colección de ordenes que hacen los usuarios con sus respectivos ID generados automaticamente para retornarle al usuario.

[React-Router-Dom](https://reactrouter.com/)
Esta librería se encarga de generar rutas dinámicas para asi facilitar la navegabilidad por el sitio.

[React-Router-Dom](https://reactrouter.com/)

## Hooks
 ###### useState
Usado para generar estados al componente y guardar esos estados para poder modificarlos.

###### useEffect
Usado para llevar a cabo efectos secundarios en componentes funcionales.

###### useContext
Con useContext logramos crear un contexto para poder tener dentro todos los datos, estados y funciones que querramos pasar a cualquier componente hijo.

###### useParams
Con useParams se detecta el parametro que le indicamos por la URL.

## Instalación y visualización
1. Copiamos el link HTTPS desde Code en Github
1. Descargamos el archivo zip, o en caso de tener Git instalado, haremos un Git clone.
`git clone https://github.com/JavierPalina/Ecommerce-Coderh.git`
1. Desde la terminal nos paramos en la carpeta raiz del proyecto e instalamos todos las dependencias que están dentro con "npm i".
`npm i`
1. Con "npm start" iniciamos la App en el navegador con el link http://localhost:3000 para su visualización.
`npm start`

## Demo 
![demo](public/media/test.gif)