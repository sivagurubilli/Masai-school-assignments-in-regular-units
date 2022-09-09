import styles from "./navbar.module.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.navright}>
<h2>puppy</h2>
        </div>
    <div className={styles.navleft}>
 
<Link className={styles.link} to="/">Home</Link >
<Link  className={styles.link} to="/puppy">Puppy</Link >
<Link  className={styles.link} to="/search">Search</Link >
    </div></div>
  )
}

export default Navbar