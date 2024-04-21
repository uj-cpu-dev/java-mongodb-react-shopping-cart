import React from 'react'
import CartImage from "./CartImage";
import CartDescription from "./CartDescription";
import CartItemSize from "./CartItemSize";
import CartItemPrice from "./CartItemPrice";
import CartQuantity from "./CartQuantity";
import CartRemove from "./CartRemove";

const CartItem = ({ cartItemDetails }) => {
    const {product_name, size, price, itemCount} = cartItemDetails;
    return(
        <div className={'cart-item-container'}>
            <CartImage />
            <CartDescription product_name={product_name} />
            <CartItemSize size={size} />
            <CartQuantity itemCount={itemCount} />
            <CartRemove />
            <CartItemPrice price={price} />
        </div>
    )
}

export default CartItem;