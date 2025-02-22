import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      Products
      <div className='d-flex flex-wrap gap-4'>
      {
        products?.map((item, key) => (
          <div className="card" key={key} style={{width: "18rem"}}>
            <img src={item?.image} className="card-img-top img-fluid" height={300} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.category}</p>
                <Link to={`/product-details/${item?.id}`} className="btn btn-primary">View Details</Link>
              </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Products
