import React from 'react'

const CartList = ( { isOpen } ) => {
  return (
    <div className={`cart-list-container ${isOpen && 'cart-list-container-open'}`}>

    </div>
  )
}

export default CartList