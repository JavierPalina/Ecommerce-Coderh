import { useState, useEffect} from "react";
import { Producto } from "./Productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({}) => {
    const [item, getItem] = useState(null);
    useEffect(() => {
        const MocAsync = new Promise((res) => {
            setTimeout(() => {
                const productoDeDB = Producto
                res(productoDeDB)
            }, 2000)
    })

    MocAsync.then(item => {
            getItem(item)
        })
    },[])
    if(item) {
        return (
            <div>
               <ItemDetail item={item} />
            </div>
          )
    }
 }


export default ItemDetailContainer