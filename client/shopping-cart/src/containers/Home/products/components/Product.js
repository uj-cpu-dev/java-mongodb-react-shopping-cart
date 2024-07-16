import React from 'react'
import ProductImage from './ProductImage';
import ProductRating from './ProductRating';
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';

const Product = ( { product } ) => {
    const { rating, product_name, price, id, thumbnail } = product;
    
    return (
        <Link className='product-container' to={`/${id}`}>
            <ProductImage thumbnail={thumbnail} />
            <ProductRating rating={rating} />
            <ProductDetails productName={product_name} price={price} />
        </Link>
    )
}

export default Product