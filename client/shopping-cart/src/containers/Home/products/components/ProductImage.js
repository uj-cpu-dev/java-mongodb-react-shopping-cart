import React from 'react'

const ProductImage = ( { thumbnail } ) => {
  return (
    <figure className='product-image-container'>
        <img src={thumbnail} alt="product-img" />
    </figure>
  )
}

export default ProductImage