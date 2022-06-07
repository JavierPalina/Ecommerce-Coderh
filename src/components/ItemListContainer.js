import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <div className="ListContainer">
            <h1> {props.greeting} </h1>
            <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
        </div>
    )
}

export default ItemListContainer