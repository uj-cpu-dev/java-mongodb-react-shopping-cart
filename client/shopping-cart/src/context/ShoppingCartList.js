import React, { createContext, useContext, useState, useEffect } from 'react'
import useGetCartItems from "../api/getAllCartItems";
import useAddToShoppingCart from "../api/addToShoppingCart";

const ShoppingCartListContext = createContext();

const ShoppingListProvider = ( { children } ) => {
    const [cartItems, setCartItems] = useState([]);
    const { data } = useGetCartItems();
    const { mutation } = useAddToShoppingCart();

    useEffect(() => {
       if(data) setCartItems(data);
    }, [data]);

    const addToCart = (payload) => {
        mutation.mutate(payload, {
            onSuccess: () => {
                // Update state only when mutation returns a success response
                setCartItems((prev) => {
                    const prevItems = [...prev];
                    prevItems.push(payload);
                    return prevItems;
                });
            }
        });
    }

    const updateCart = (payload) => {
        if(payload.itemCount < 1){
            deleteCart(payload)
        }
        setCartItems((prev) => {
            const prevItems = [...prev];
            return prevItems.map(item => item.id === payload.id ? payload: item);
        })
    }

    const deleteCart = (payload) => {
        setCartItems((prev) => {
            const prevItems = [...prev];
            return prevItems.filter(t => t.id !== payload.id)
        })
    }


    return(
        <ShoppingCartListContext.Provider value={{
            state : {
                cartItems
            },
            functions : {
                addToCart,
                updateCart,
                deleteCart
            }
        }}>
            {children}
        </ShoppingCartListContext.Provider>
    )
}

export default ShoppingListProvider;

export const useGlobalContext = () => useContext(ShoppingCartListContext);