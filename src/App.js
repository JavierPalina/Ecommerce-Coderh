import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a ViperG, Ecommerce de 
            práctica para CoderHouse"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
