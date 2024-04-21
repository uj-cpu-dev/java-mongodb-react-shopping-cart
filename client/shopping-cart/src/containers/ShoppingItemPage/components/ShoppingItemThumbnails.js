import React from 'react';
import ShoppingItemThumbnail from "./ShoppingItemThumbnail";

const ShoppingItemThumbnails = ( { images } ) => {
    return (
        <figure className="shopping-item-thumbnails-container">
            {
                images &&
                images.map((img, i) => {
                    return(
                        <ShoppingItemThumbnail key={i} image={''} />
                    )
                })
            }
        </figure>
    )
}

export default ShoppingItemThumbnails;