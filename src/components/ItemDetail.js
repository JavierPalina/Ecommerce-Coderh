import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => (
    <>
    <hr/>
    <h2>Desafio Detail</h2>
    <div className="cardContainer detail">
        <div className="containerImage">
            <img src={item.pictureUrl} className="detail-image" />
        </div>
        <div className="producto">
            <h3 className="name detail-name">{item.title} <small>({item.stock} disponibles)</small></h3>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={()=>{}} />
        </div>
    </div>
    </>
)

export default ItemDetail