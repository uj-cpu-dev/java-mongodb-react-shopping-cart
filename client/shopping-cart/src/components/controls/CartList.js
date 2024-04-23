import React from 'react'
import HeaderTitle from "./HeaderTitle";
import CartDescriptionTitles from "./CartDescriptionTitles";
import CartItems from "./CartItems";
import CartContent from "./CartContent";
import {useGlobalContext} from "../../context/ShoppingCartList";
import ItemsTotalContainer from "./ItemsTotalContainer";
const CartList = ( { isOpen } ) => {
    const context = useGlobalContext();
    const { state } = context;
    return (
        <div className={`cart-list-container ${isOpen && 'cart-list-container-open'}`}>
          <div className={'container'}>
              <div className={'cart-list-content'}>
                  <HeaderTitle title={'Your Cart'}/>
                  <CartContent data={state?.cartItems}>
                      <CartDescriptionTitles />
                      <CartItems cartItemData={state?.cartItems} />
                      <ItemsTotalContainer />
                  </CartContent>
              </div>
          </div>
        </div>
  )
}

export default CartList