import React from 'react';
import ShoppingItemThumbnail from "./ShoppingItemThumbnail";

const ShoppingItemThumbnails = ( { images } ) => {
    return (
        <figure className="shopping-item-thumbnails-container">
            {
                images &&
                images.map(img => {
                    return(
                        <ShoppingItemThumbnail image={''} />
                    )
                })
            }
        </figure>
    )
}

export default ShoppingItemThumbnails;