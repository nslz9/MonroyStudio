import React from 'react'

const CartWidget = () => {
    const itemCount = 3;
  return (
    <div>
        <h4>icono</h4>
        <span className="badge">{itemCount}</span>
    </div>
  )
}

export default CartWidget