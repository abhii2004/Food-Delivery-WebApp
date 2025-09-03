import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your <br /> favourite Food here</h2>
        <p>Nestled in the heart of the city, Zapp offers a cozy and inviting <br />atmosphere where guests can indulge in a curated selection of delicious dishes.</p>
        <button onClick={() => setMenu("Menu")}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
