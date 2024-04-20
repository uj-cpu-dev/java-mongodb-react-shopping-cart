import React from 'react';
import ItemReviews from "../../../components/controls/ItemReviews";
import ItemColors from "../../../components/controls/ItemColors";
import ItemSizes from "../../../components/controls/ItemSizes";
import AddToCart from "../../../components/controls/AddToCart";

const ShoppingItemDetails = ( { productName, price } ) => {
    return(
        <div className={'shopping-item-details-container'}>
            <h2>{productName}</h2>
            <ItemReviews />
            <h1>{`$${price}`} </h1>
            <ItemColors />
            <ItemSizes />
            <AddToCart />
        </div>
    )
}

export default ShoppingItemDetails