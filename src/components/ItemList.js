import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <>
     {
      items.map(({ id, title, price, stock, pictureUrl, description }) => {
        return <Item 
          key={id} 
          id={id} 
          title={title} 
          price={price} 
          stock={stock} 
          pictureUrl={pictureUrl} 
          description={description} 
          />
        })
      }
    </>
  )
}

export default ItemList