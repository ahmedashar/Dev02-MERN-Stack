import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    let {id} = useParams();
    

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            Product Details
            <div>
                <img src={product?.image}/>
            </div>
        </div>
    )
}

export default ProductDetails
