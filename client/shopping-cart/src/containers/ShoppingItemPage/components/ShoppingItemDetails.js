import React from 'react';
import ItemReviews from "../../../components/controls/ItemReviews";
import ItemColors from "../../../components/controls/ItemColors";
import ItemSizes from "../../../components/controls/ItemSizes";
import AddToCart from "../../../components/controls/AddToCart";
import {useGlobalContext} from "../../../context/ShoppingCartList";

const ShoppingItemDetails = ( { data } ) => {
    const { product_name, price} = data;
    const context = useGlobalContext();
    const {state, functions} = context;

    return(
        <div className={'shopping-item-details-container'}>
            <h2>{product_name}</h2>
            <ItemReviews />
            <h1>{`$${price}`} </h1>
            <ItemColors />
            <ItemSizes />
            <AddToCart onClickHandler={() => functions?.addToCart(data)} />
        </div>
    )
}

export default ShoppingItemDetails