package com.ujdevcart.shopping.cart.ShoppingList;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShoppingListItemsRepository extends MongoRepository<ShoppingListItems, ObjectId> {
    Optional<ShoppingListItems> findById(Integer id);
}
