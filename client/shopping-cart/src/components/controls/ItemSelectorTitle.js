import React from 'react';

const ItemSelectorTitle = ({title, selector}) => {
    return (
        <div className={'item-colors-top-content'}>
            <h4> {`${selector}:`} </h4>
            <p> {title} </p>
        </div>
    )
}

export default ItemSelectorTitle;