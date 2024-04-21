import React from 'react'
import HeaderTitle from "./HeaderTitle";
import CartDescriptionTitles from "./CartDescriptionTitles";
import CartItems from "./CartItems";
import CartContent from "./CartContent";
const CartList = ( { isOpen } ) => {
  return (
    <div className={`cart-list-container ${isOpen && 'cart-list-container-open'}`}>
      <div className={'container'}>
          <div className={'cart-list-content'}>
              <HeaderTitle title={'Your Cart'}/>
              <CartContent data={[]}>
                  <CartDescriptionTitles />
                  <CartItems cartItemData={[]} />
              </CartContent>
          </div>
      </div>
    </div>
  )
}

export default CartList