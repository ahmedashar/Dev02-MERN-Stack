import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className='bg-primary d-flex justify-content-between align-items-center p-4'>
        <div>
            <h4 className='text-light'>React App</h4>
        </div>
        <ul className={`${styles.nav_links} d-flex gap-5`}>
            {/* <li className={styles.li}><Link to="/home">Home</Link></li>
            <li className={styles.li}><Link to="/products">Products</Link></li> */}
            <li className={styles.li}>
                <NavLink className={({isActive})=> isActive ? styles.active_link : styles.link } to="/home">Home</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={({isActive})=> isActive ? styles.active_link : styles.link } to="/products">Products</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
