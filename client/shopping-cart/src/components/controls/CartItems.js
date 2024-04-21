import React from 'react';
import CartItem from "./CartItem";

const CartItems = ( { cartItemData } ) => {
    return(
        <div className={'cart-items-container'}>
            {
                cartItemData &&
                cartItemData.map(item => {
                    return(
                        <CartItem key={item.id} cartItemDetails={item} />
                    )
                })
            }
        </div>
    )
}

export default CartItems