import React, { useState } from 'react';
import ItemReviews from "../../../components/controls/ItemReviews";
import ItemColors from "../../../components/controls/ItemColors";
import ItemSizes from "../../../components/controls/ItemSizes";
import AddToCart from "../../../components/controls/AddToCart";
import {useGlobalContext} from "../../../context/ShoppingCartList";
import { v4 as uuidv4 } from 'uuid';

const ShoppingItemDetails = ( { data } ) => {
    const [shoppingDetails, setShoppingDetails] = useState({...data, size: '41'});
    const { product_name, price, size } = shoppingDetails;
    const context = useGlobalContext();
    const { state, functions } = context;
    const { cartItems } = state;
    const { addToCart, updateCart } = functions;

    const updateItemSize = (size) => {
       setShoppingDetails((prev) => ({
           ...prev,
           size: size
       }))
    }

    const checkIfItemExistsBeforeAdding = () => {
        const findItem = cartItems.find(item => item.product_name === product_name && parseFloat(item.size) === parseFloat(size));

        if (findItem) {
            // If item exists and size matches, update its count
            findItem.itemCount += 1;
            updateCart({
                ...shoppingDetails,
                itemCount: findItem.itemCount,
                id: findItem.id
            });
        } else {
            // If item does not exist or size doesn't match, add it to the cart
            addToCart({
                ...shoppingDetails,
                id: uuidv4()
            });
        }
    };

    return(
        <div className={'shopping-item-details-container'}>
            <h2>{product_name}</h2>
            <ItemReviews />
            <h1>{`$${price}`} </h1>
            <ItemColors />
            <ItemSizes size={size} updateItemSize={updateItemSize} />
            <AddToCart
                onClickHandler={() => checkIfItemExistsBeforeAdding()} />
        </div>
    )
}

export default ShoppingItemDetails