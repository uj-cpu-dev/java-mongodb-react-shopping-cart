import React, { useState, useEffect } from 'react'
import CartImage from "./CartImage";
import CartDescription from "./CartDescription";
import CartItemSize from "./CartItemSize";
import CartItemPrice from "./CartItemPrice";
import CartQuantity from "./CartQuantity";
import CartRemove from "./CartRemove";
import { useGlobalContext } from "../../context/ShoppingCartList";

const CartItem = ({ cartItemDetails }) => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const { product_name, size, price, thumbnail } = cartItemDetails;
    const context = useGlobalContext();
    const { state, functions } = context;
    const { isUpdatingShoppingCart } = state;
    const { updateCart,  deleteCart, setIsUpdatingShoppingCart } = functions;

    const updateItemCount = (payload) => {
        payload === 'add' ? setCartItemCount((prev) => ++prev) : setCartItemCount((prev) => --prev);
        setIsUpdatingShoppingCart(true);
    }

    useEffect(() => {
        setCartItemCount(cartItemDetails?.itemCount)
    }, [cartItemDetails]);

    useEffect(() => {
        if(isUpdatingShoppingCart){
            updateCart({
                ...cartItemDetails,
                itemCount: cartItemCount
            })
        }
    }, [isUpdatingShoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className={'cart-item-container'}>
            <CartImage thumbnail={cartItemDetails?.thumbnail} />
            <CartDescription product_name={product_name} />
            <CartItemSize size={size} />
            <CartQuantity itemCount={cartItemCount} updateItemCount={updateItemCount} />
            <CartRemove onRemove={() => deleteCart(cartItemDetails)} />
            <CartItemPrice price={price} />
        </div>
    )
}

export default CartItem;