import React from 'react'

const CartQuantity = ( { itemCount }) => {
    return(
        <div className={'cart-quantity-container'}>
            <span> - </span>
            <p> {itemCount} </p>
            <span> + </span>
        </div>
    )
}

export default CartQuantity;