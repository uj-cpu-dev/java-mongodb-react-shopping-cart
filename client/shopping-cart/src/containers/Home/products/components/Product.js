import React from 'react'
import ProductImage from './ProductImage';
import ProductRating from './ProductRating';
import ProductDetails from './ProductDetails';

const Product = ( { product } ) => {
    const { rating, product_name, price } = product;
    
    return (
        <div className='product-container'>
            <ProductImage />
            <ProductRating rating={rating} />
            <ProductDetails productName={product_name} price={price} />
        </div>
    )
}

export default Product