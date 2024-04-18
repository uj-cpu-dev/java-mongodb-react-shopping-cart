import React from 'react'

const ProductDetails = ( { productName, price } ) => {
  return (
    <div className='product-details-container'>
        <h4>{productName}</h4>
        <p> {`$${price}`} </p>
    </div>
  )
}

export default ProductDetails