import React from 'react'

const CartQuantity = ( { itemCount, updateItemCount }) => {
    return(
        <div className={'cart-quantity-container'}>
            <span onClick={() => updateItemCount('remove')}> - </span>
            <p> {itemCount} </p>
            <span onClick={() => updateItemCount('add')}> + </span>
        </div>
    )
}

export default CartQuantity;