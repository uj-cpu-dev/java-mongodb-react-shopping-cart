package com.ujdevcart.shopping.cart.ShoppingCartList;

import com.ujdevcart.shopping.cart.ErrorHandling.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/shopping-cart-list")
public class ShoppingCartListController {

    @Autowired
    public ShoppingCartListService shoppingCartListService;

    @GetMapping
    public ResponseEntity<?> getCartItems(){
        try{
            List<ShoppingCartList> shoppingCartLists = shoppingCartListService.getAllCartItems();
            return new ResponseEntity<List<ShoppingCartList>>(shoppingCartLists, HttpStatus.OK);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addToCartItems(@RequestBody ShoppingCartList cartListItem){
        try{
            ShoppingCartList cartItem = shoppingCartListService.addToCart(cartListItem);
            return ResponseEntity.status(HttpStatus.CREATED).body(cartItem);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCartItems(@PathVariable String id, @RequestBody ShoppingCartList cartListItem){
        try{
            Optional<ShoppingCartList> existingCartItem = shoppingCartListService.updateCartItems(id, cartListItem);
            return new ResponseEntity<>(existingCartItem, HttpStatus.OK);
        } catch(CustomException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCartItemById(@PathVariable String id){
        try{
            boolean cartItemToDelete = shoppingCartListService.deleteCartItem(id);
            if(cartItemToDelete){
                return ResponseEntity.ok().body("CART ITEM DELETED");
            }
            throw new CustomException("CART ITEM COULD NOT BE DELETED");
        } catch(CustomException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

}
