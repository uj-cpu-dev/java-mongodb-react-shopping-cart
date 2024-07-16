import React from 'react';

const ShoppingItemImage = ( { thumbnail } ) => {
    return(
        <div className="shopping-item-image-container">
            <figure className={"shopping-item-top-image"}>
                <img src={thumbnail} alt="shopping-item-main-img" />
            </figure>
        </div>
    )
}

export default ShoppingItemImage;