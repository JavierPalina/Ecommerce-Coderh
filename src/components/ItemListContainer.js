import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, query, where } from 'firebase/firestore'
import { collectionProd } from '../firebase/firebaseConfig'

const ItemListContainer = (props) => {
    const [Items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const ref = category
            ? query(collectionProd, where('category', '==', category)): collectionProd

        getDocs(ref).then((response) => {
            setLoading (false)
            const Items = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setItems(Items)
        })
    }, [category])

     if(loading) {
             return (
                <div className="container">
                    <div className="containerLoad">
                        <h3>Cargando productos...</h3>
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
        <div className="ListContainer">
            <h1>{props.greeting}</h1>
            <div className="Products">
                <ItemList items={Items}/>
            </div>
        </div>
        )
    }
}

export default ItemListContainer