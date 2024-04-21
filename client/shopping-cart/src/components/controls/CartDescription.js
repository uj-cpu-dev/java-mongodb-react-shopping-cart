import React from 'react'

const CartDescription = ( { product_name }) => {
    return (
        <div className={'cart-description'}>
            <h4>{product_name}</h4>
            <p>Product Code: ML54</p>
        </div>
    )
}

export default CartDescription;