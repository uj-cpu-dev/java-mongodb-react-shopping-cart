package com.ujdevcart.shopping.cart.ShoppingList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingListItemsService {

    @Autowired
    public ShoppingListItemsRepository shoppingListItemsRepository;

    public List<ShoppingListItems> getAllShoppingItems(){
        return shoppingListItemsRepository.findAll();
    }

    public Optional<ShoppingListItems> getEachShoppingItem(Integer id){
        return shoppingListItemsRepository.findById(id);
    }
}
