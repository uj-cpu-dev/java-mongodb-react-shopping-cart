import React from 'react'

const ProductsHeader = ( { productsCount } ) => {
  return (
    <div className='products-header-container'>
        <h3>{`Products (${productsCount})`}</h3>
    </div>
  )
}

export default ProductsHeader