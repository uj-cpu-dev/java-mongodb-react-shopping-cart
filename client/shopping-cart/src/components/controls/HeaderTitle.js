import React from 'react';

const HeaderTitle = ( { title, additionalClassName } ) => {
    return (
        <div className={additionalClassName}>
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderTitle;