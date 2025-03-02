import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import { Link } from 'react-router-dom'
import useCounter from '../../utils/customHook/useCounter'
import useFetch from '../../utils/customHook/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

const Products = () => {
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   getProducts()
  // }, [])

  // const getProducts = async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const { data, error, loading } = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      Products
      <div className='d-flex flex-wrap gap-4'>
        {loading ?
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :

          data?.map((item, key) => (
            <div className="card" key={key} style={{ width: "18rem" }}>
              <img src={item?.image} className="card-img-top img-fluid" height={300} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.category}</p>
                <Link to={`/product-details/${item?.id}`} className="btn btn-primary">View Details</Link>
                &nbsp;
                <button onClick={()=>{dispatch(addToCart(item))}} className='btn btn-primary'>Add to Cart</button>
              </div> 
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
