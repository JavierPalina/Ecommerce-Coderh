import { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Productos } from "./Productos";

function ItemDetailContainer({}) {
    const getProductsById = (id) => {
            return new Promise (resolve => {
            setTimeout(() => {
                resolve(Productos.find(prod => prod.id === id))
            }, 2000)
        })
    }

    const [Product, setProduct] = useState();	
    const { id } = useParams()

    useEffect(() => {
        getProductsById(parseInt(id))
        .then(response => {
            setProduct(response)
        })
    }, [])
    
    if(Product) {  
        return (
            <ItemDetail {...Product} />
        )
   }else {
        return (
            <div className="container">
                <div className="containerLoad">
                    <div className="loader">
                        <div className="inner one"></div>
                        <div className="inner two"></div>
                        <div className="inner three"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetailContainer