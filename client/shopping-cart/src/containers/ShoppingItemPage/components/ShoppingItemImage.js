import React from 'react';
import ShoppingItemThumbnails from "./ShoppingItemThumbnails";

const ShoppingItemImage = () => {
    return(
        <div className="shopping-item-image-container">
            <figure className={"shopping-item-top-image"}>
                <img src="" alt="shopping-item-main-img" />
            </figure>
            <ShoppingItemThumbnails images={["", "", "", ""]} />
        </div>
    )
}

export default ShoppingItemImage;