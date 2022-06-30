import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "./context/cartContext"

const App = () => {
  return (
     <BrowserRouter>
     <CartProvider>
        <Navbar/>
        <Routes>
              <Route path="/" element={<ItemListContainer greeting="Bienvenidos a ViperG, Ecommerce de 
             práctica para CoderHouse"/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
             <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path="/cart" element={<Cart />} />
       </Routes>
       </CartProvider>
      </BrowserRouter>
    
  )
}

export default App;
