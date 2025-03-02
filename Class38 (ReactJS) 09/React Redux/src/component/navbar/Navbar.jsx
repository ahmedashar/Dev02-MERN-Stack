import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { clearAll, removeFromCart } from '../../store/slices/cartSlice';

const Navbar = () => {
    const counterValue = useSelector(state => state.counter.value)
    const cartList = useSelector(state => state?.cart?.cart)
    const dispatch = useDispatch();
    return (
        <div className='bg-primary d-flex justify-content-between align-items-center p-4'>
            <div>
                <h4 className='text-light'>React App {counterValue}</h4>
            </div>
            <ul className={`${styles.nav_links} d-flex gap-5`}>
                {/* <li className={styles.li}><Link to="/home">Home</Link></li>
            <li className={styles.li}><Link to="/products">Products</Link></li> */}
                <li className={styles.li}>
                    <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/home">Home</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/products">Products</NavLink>
                </li>
            </ul>


            <button type="button" class="btn btn-primary position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <FaCartShopping fontSize={20} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartList?.length}
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Your Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {
                        cartList?.map((item, key) => (
                            <div class="card p-2 mt-2">
                                <div className='d-flex gap-1'>
                                    <div style={{ width: '40px', height: '40px' }}>
                                        <img src={item?.image} class="card-img-top" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                    </div>
                                    <p class="card-title">{item?.title} <br /> <span>Price ${item?.price} | Quantity: {item?.quantity}</span></p>
                                </div>
                                <div class="card-body text-end">

                                    <button class="btn btn-danger" onClick={()=> dispatch(removeFromCart(item))}><MdDelete fontSize={20} /></button>
                                </div>
                            </div>
                        ))
                    }

                    {!cartList?.length ? <div>Cart is Empty</div> :<div className='text-center mt-2' > <button className='btn btn-danger' onClick={()=>{dispatch(clearAll())}}><MdDelete fontSize={20} /> Empty Cart</button></div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
