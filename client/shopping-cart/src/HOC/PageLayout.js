import React, { useState, useEffect } from 'react'
import Navbar from '../components/controls/Navbar'
import CartList from '../components/controls/CartList'

const PageLayout = ( { children } ) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen){
            document.body.classList.add('overlay-active')
        } else {
            document.body.classList.remove('overlay-active')
        }
    }, [isOpen]);

   /* const toggleOverlay = (param) => {
        document.body.classList.toggle(param);
        window.scrollTo(0, 0);
    }*/

    return (
        <div className={"page-layout-container"}>
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
            <CartList isOpen={isOpen} />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default PageLayout