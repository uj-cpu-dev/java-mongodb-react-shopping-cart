import React from 'react';
import Review from '../../images/review.png'
const ItemReviews = () => {
    const stars = ["One", "Two", "Three", "Four"];

    return(
        <div className={'items-review-container'}>
            {
                stars &&
                stars.map((t, i) => {
                    return (
                        <img key={i} src={Review} alt={"review-logo"} />
                    )
                })
            }
            <p> 42 reviews </p>
        </div>
    )
}

export default ItemReviews;