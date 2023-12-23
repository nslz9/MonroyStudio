import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
      <header>
        <h1>MonroyStudio</h1>
        <nav>
          <ul>
            <li>inicio</li>
            <li>nosotros</li>
            <li>productos</li>
            <li>contacto</li>
          </ul>
        </nav>

        <CartWidget/>
      </header>
    </div>
  )
}

export default Navbar