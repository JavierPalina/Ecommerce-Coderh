import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a ViperG, Ecommerce de práctica para CoderHouse"/>
    </>
  )
}

export default App;
