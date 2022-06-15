import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a ViperG, Ecommerce de práctica para CoderHouse"/>
      <ItemDetailContainer />
    </>
  )
}

export default App;
