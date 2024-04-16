import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'

const PageLayout = ( { children } ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
            <CartList isOpen={isOpen} />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default PageLayout