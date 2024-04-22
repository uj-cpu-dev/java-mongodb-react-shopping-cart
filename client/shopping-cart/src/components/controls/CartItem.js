import React, { useState, useEffect } from 'react'
import CartImage from "./CartImage";
import CartDescription from "./CartDescription";
import CartItemSize from "./CartItemSize";
import CartItemPrice from "./CartItemPrice";
import CartQuantity from "./CartQuantity";
import CartRemove from "./CartRemove";
import {useGlobalContext} from "../../context/ShoppingCartList";

const CartItem = ({ cartItemDetails }) => {
    const [cartItemCount, setCartItemCount] = useState(cartItemDetails?.itemCount)
    const { product_name, size, price, itemCount } = cartItemDetails;
    const context = useGlobalContext();
    const { functions } = context;
    const { updateCart,  deleteCart } = functions;

    const updateItemCount = (payload) => {
      payload === 'add' ? setCartItemCount((prev) => ++prev) : setCartItemCount((prev) => --prev);
    }

    useEffect(() => {
        updateCart({
            ...cartItemDetails,
            itemCount: cartItemCount
        })
    }, [cartItemCount]);

    return(
        <div className={'cart-item-container'}>
            <CartImage />
            <CartDescription product_name={product_name} />
            <CartItemSize size={size} />
            <CartQuantity itemCount={itemCount} updateItemCount={updateItemCount} />
            <CartRemove onRemove={() => deleteCart(cartItemDetails)} />
            <CartItemPrice price={price} />
        </div>
    )
}

export default CartItem;