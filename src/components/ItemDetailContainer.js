import { useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { collectionProd } from "../firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [Product, setProduct] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        setLoading(true)
        const ref = doc(collectionProd, id)
        getDoc(ref).then((response) => {
            setLoading (false)
            setProduct({
                id: response.id,
                ...response.data(),
            })
        })
    }, [id])
    
    if(loading) {  
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
    } else {
        return (
            <ItemDetail {...Product}/>
        )
    }
}

export default ItemDetailContainer