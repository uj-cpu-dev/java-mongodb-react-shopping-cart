import React from 'react';

const AddToCart = ( { onClickHandler } ) => {
    return (
        <button
            className={`add-to-cart-button`}
            onClick={onClickHandler}>
            Add to cart
        </button>
    )
}

export default AddToCart;