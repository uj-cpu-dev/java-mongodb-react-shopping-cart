package com.ujdevcart.shopping.cart.ShoppingCartList;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShoppingCartListRepository extends MongoRepository<ShoppingCartList, ObjectId> {
    Optional<ShoppingCartList> findById(String id);

    Optional<ShoppingCartList> deleteById(String id);
}
