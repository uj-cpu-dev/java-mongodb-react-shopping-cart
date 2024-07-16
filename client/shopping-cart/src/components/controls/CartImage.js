import React from 'react';

const CartImage = ( { thumbnail } ) => {
    return (
        <figure className={'cart-img-container'}>
            <img src={thumbnail} alt={'cart-img-logo'}/>
        </figure>
    )
}

export default CartImage;