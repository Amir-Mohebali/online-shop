import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import './productList.css'

const ProductList = () => {
    const { cat } = useParams()
    const [data, setData] = useState()
    const [error, setError] = useState('')

    useEffect(()=> {
        fetch(`https://my-json-server.typicode.com/Amir-Mohebali/shop-api/products?Cat=${cat}`)
          .then((res) => {return res.json()})
          .then((resp) => setData(resp))
          .catch((err) => setError(err))
    }, [cat])
    
    return (
        <div className="container">
            <h2 className="title">Our Latest {cat}s</h2>
            <div className="items">
                {data
                ? data.map(item => <Item data={item} />)
                : <h3>{error}</h3>
                }
            </div>
        </div>
    )
}

export default ProductList