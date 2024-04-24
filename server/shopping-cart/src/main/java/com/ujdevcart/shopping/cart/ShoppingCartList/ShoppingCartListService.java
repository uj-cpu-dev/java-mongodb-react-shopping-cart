package com.ujdevcart.shopping.cart.ShoppingCartList;

import com.ujdevcart.shopping.cart.ErrorHandling.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartListService {

    @Autowired
    public ShoppingCartListRepository shoppingCartListRepository;

    public List<ShoppingCartList> getAllCartItems(){
        return shoppingCartListRepository.findAll();
    }

    public ShoppingCartList addToCart(ShoppingCartList cartItem){
        return shoppingCartListRepository.save(cartItem);
    }

    public Optional<ShoppingCartList> updateCartItems(String id, ShoppingCartList cartItem){
        //cartItem.setId(id);
        Optional<ShoppingCartList> cartListItem = shoppingCartListRepository.findById(id);
        if(cartListItem.isEmpty()){
            throw new CustomException("CART ITEM NOT FOUND");
        }
        ShoppingCartList cartItemToUpdate = cartListItem.get();
        cartItemToUpdate.setItemCount(cartItem.getItemCount());

        return Optional.of(addToCart(cartItemToUpdate));
    }

    public boolean deleteCartItem(String id) {
        Optional<ShoppingCartList> cartItemToDelete = shoppingCartListRepository.deleteById(id);
        if(cartItemToDelete.isEmpty()){
            throw new CustomException("CART ITEM DOES NOT EXIST");
        }
        return true;
    }
}
