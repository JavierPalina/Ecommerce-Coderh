import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola, bienvenido a mi primer Prop :O"/>
    </>
  )
}

export default App;
