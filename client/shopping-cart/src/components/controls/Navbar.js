import React from 'react'
import CompLogo from '../../images/comp-logo.png'
import CartLogo from '../../images/cart-logo.png'

const Navbar = ( { setIsOpen, isOpen } ) => {
  return (
    <div className='navbar-container'>
        <div className='container'>
            <figure className='navbar-images-container'>
                <img src={CompLogo} alt='company-logo' />
                <img src={CartLogo} alt='cart-logo' onClick={() => setIsOpen(!isOpen)} />
            </figure>
        </div>
    </div>
  )
}

export default Navbar