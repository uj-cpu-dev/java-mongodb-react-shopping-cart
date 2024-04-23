import React from 'react';

const ItemTab = ( { title, value } ) => {
    return(
        <div className={'item-tab'}>
            <span>{title}</span>
            <p>{value}</p>
        </div>
    )
}

export default ItemTab