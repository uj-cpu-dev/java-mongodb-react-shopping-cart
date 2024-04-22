import React from 'react';

const CartRemove = ( { onRemove } ) => {
    return (
        <div className={'cart-remove'} onClick={onRemove}>
            <button> x </button>
        </div>
    )
}

export default CartRemove;