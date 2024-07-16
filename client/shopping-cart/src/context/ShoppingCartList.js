import React, { createContext, useContext, useState, useEffect } from 'react'
import useGetCartItems from "../api/getAllCartItems";
import useAddToShoppingCart from "../api/addToShoppingCart";
import useUpdateShoppingCart from "../api/updateShoppingCart";
import useDeleteShoppingCart from "../api/deleteShoppingCart";

const ShoppingCartListContext = createContext();

const ShoppingListProvider = ( { children } ) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);
    const [isUpdatingShoppingCart, setIsUpdatingShoppingCart] = useState(false);
    const { data } = useGetCartItems();
    const { mutateAddToShoppingCart } = useAddToShoppingCart();
    const { mutateUpdateShoppingCart } = useUpdateShoppingCart();
    const { mutateDeleteShoppingCart } = useDeleteShoppingCart();

    useEffect(() => {
       if(data) setCartItems(data);
    }, [data]);

    useEffect(() => {
        if(cartItems.length > 0) calculateTotalPrice()
    }, [cartItems]); // eslint-disable-line react-hooks/exhaustive-deps

    const addToCart = (payload) => {
        mutateAddToShoppingCart.mutate(payload, {
            onSuccess: () => {
                // Update state only when mutation returns a success response
                setCartItems((prev) => {
                    const prevItems = [...prev];
                    prevItems.push(payload);
                    return prevItems;
                });
                //toast.success('Item added to cart')
            },
            onError: () => {
                //toast.error('Error adding item to cart')
            }
        });
    }

    const updateCart = (payload) => {
        mutateUpdateShoppingCart.mutate(payload, {
            onSuccess: () => {
                updateCartItemAndCheckDelete(payload)
                setIsUpdatingShoppingCart(false)
                //toast.success('Item updated in cart')
            },
            onError: () => {
                //toast.error('Error updating item in cart')
            }
        })
    }

    const updateCartItemAndCheckDelete = (payload) => {
        if(payload.itemCount < 1){
            deleteCart(payload)
        }
        setCartItems((prev) => {
            const prevItems = [...prev];
            return prevItems.map(item => item.id === payload.id ? payload: item);
        })
    }

    const deleteCart = (payload) => {
        mutateDeleteShoppingCart.mutate(payload.id, {
            onSuccess: () => {
                setCartItems((prev) => {
                    const prevItems = [...prev];
                    return prevItems.filter(t => t.id !== payload.id)
                })
                //toast.success('Item deleted from cart')
            },
            onError: () => {
                //toast.error('Error deleted item from cart')
            }
        })
    }

    const calculateTotalPrice = () => {
        const totalValues = [];
        for (let i = 0; i < cartItems.length; i++) {
            const itemCount = cartItems[i].itemCount;
            const price = cartItems[i].price;
            const total = parseInt(itemCount) * parseInt(price);
            totalValues.push(total);
        }
        //Update the state value of the total Items;
        setTotalItemsPrice(totalValues.reduce((cumVal, totalVal) => cumVal + totalVal))
    }


    return(
        <ShoppingCartListContext.Provider value={{
            state : {
                cartItems,
                totalItemsPrice,
                isUpdatingShoppingCart
            },
            functions : {
                addToCart,
                updateCart,
                deleteCart,
                setIsUpdatingShoppingCart,
                setCartItems
            }
        }}>
            {children}
        </ShoppingCartListContext.Provider>
    )
}

export default ShoppingListProvider;

export const useGlobalContext = () => useContext(ShoppingCartListContext);