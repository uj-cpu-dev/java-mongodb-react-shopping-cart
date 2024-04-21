import React from 'react'

const CartContent = ( { children, data } ) => {
    return(
        <>
            {
                data?.length > 0
                ?
                <>
                    {children}
                </>
                :
                <h3> There are no items in your cart </h3>
            }
        </>
    )
}

export default CartContent;