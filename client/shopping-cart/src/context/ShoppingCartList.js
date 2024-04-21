import React, { createContext, useContext, useState, useEffect } from 'react'
import useGetCartItems from "../api/getAllCartItems";

const ShoppingCartListContext = createContext();

const ShoppingListProvider = ( { children } ) => {
    const [cartItems, setCartItems] = useState([]);
    const {data} = useGetCartItems();

    useEffect(() => {
       if(data) setCartItems(data);
    }, []);

    const addToCart = (payload) => {
        setCartItems((prev) => {
            const prevItems = [...prev];
            prevItems.push(payload);
            return prevItems;
        })
    }

    console.log(cartItems)





    return(
        <ShoppingCartListContext.Provider value={{
            state : {
                cartItems
            },
            functions : {
                addToCart
            }
        }}>
            {children}
        </ShoppingCartListContext.Provider>
    )
}

export default ShoppingListProvider;

export const useGlobalContext = () => useContext(ShoppingCartListContext);