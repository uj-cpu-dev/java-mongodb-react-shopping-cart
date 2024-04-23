import React from 'react'
import CompLogo from '../../images/comp-logo.png'
import CartLogo from '../../images/cart-logo.png'
import { useGlobalContext } from "../../context/ShoppingCartList";

const Navbar = ( { setIsOpen, isOpen } ) => {
    const {state} = useGlobalContext();
    const { cartItems } = state;

  return (
    <div className='navbar-container'>
        <div className='container'>
            <figure className='navbar-images-container'>
                <img src={CompLogo} alt='company-logo' />
                <div className={'cart-logo-container'}>
                    <img src={CartLogo} alt='cart-logo' onClick={() => setIsOpen(!isOpen)} />
                    <span>{cartItems?.length || 0}</span>
                </div>
            </figure>
        </div>
    </div>
  )
}

export default Navbar