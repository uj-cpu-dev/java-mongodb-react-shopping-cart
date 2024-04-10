package com.ujdevcart.shopping.cart.ShoppingList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/shopping-list")
public class ShoppingListItemsController {

    @Autowired
    public ShoppingListItemsService shoppingListItemsService;

    @GetMapping
    public ResponseEntity<List<ShoppingListItems>> getAllShoppingItems(){
        List<ShoppingListItems> shoppingList = shoppingListItemsService.getAllShoppingItems();
        return new ResponseEntity<List<ShoppingListItems>>(shoppingList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getShoppingItem(@PathVariable Integer id){
        Optional<ShoppingListItems> eachShoppingItem = shoppingListItemsService.getEachShoppingItem(id);
        if(eachShoppingItem.isEmpty()){
            return ResponseEntity.badRequest().body("SHOPPING ITEM NOT FOUND");
        }
        return new ResponseEntity<Optional<ShoppingListItems>>(eachShoppingItem, HttpStatus.OK);
    }
}
