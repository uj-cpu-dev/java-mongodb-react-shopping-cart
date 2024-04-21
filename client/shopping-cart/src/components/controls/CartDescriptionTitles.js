import React from 'react';

const CartDescriptionTitles = () => {
    const titles = ['images', 'Description', 'Size', 'Quantity', 'Remove', 'Price'];

    return(
        <div className={'cart-description-titles-container'}>
            {
                titles &&
                titles.map((title, index) => {
                    return(
                        <div key={index}>
                            {index !== 0 && title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartDescriptionTitles;