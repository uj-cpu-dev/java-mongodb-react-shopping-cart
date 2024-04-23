import React from 'react';
import ItemTab from "./ItemTab";
import {useGlobalContext} from "../../context/ShoppingCartList";

const ItemsTotalContainer = () => {
    const { state } = useGlobalContext();
    const { totalItemsPrice } = state;

    return(
        <div className={'items-total-container'}>
            <ItemTab title={'Discount'} value={`$ ${0.00}`} />
            <ItemTab title={'Delivery'} value={`$ ${0.00}`} />
            <ItemTab title={'Subtotal'} value={`$ ${totalItemsPrice || 0.00}`}/>
            <ItemTab title={'Total'} value={`$ ${totalItemsPrice || 0.00}`}/>
        </div>
    )
}
export default ItemsTotalContainer