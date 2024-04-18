import React from 'react'
import Star from '../../../images/star.png'

const ProductRating = ({rating}) => {
  return (
        <figure className='product-rating-container'>
            <img src={Star} alt='star-logo'/>
            <h6>{rating}</h6>
        </figure>
  )
}

export default ProductRating