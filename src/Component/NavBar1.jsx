import React from 'react'
import logo_light from '../../src/assets/NavBarAssets/'
// import logo_dark from 'assets/NavBarAssets/logo_white.png'

function NavBar1() {
  return (
    <div>
        <img src="" alt="logo" />
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className=''>
            <input type="text" placeholder='Search' />
            <img src="" alt="search" />

        </div>
        <img src="" alt="toggle-icon" />
    </div>
  )
}

export default NavBar1
