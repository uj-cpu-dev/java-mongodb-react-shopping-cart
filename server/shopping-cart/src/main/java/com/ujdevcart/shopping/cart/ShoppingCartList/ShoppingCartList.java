package com.ujdevcart.shopping.cart.ShoppingCartList;

import com.ujdevcart.shopping.cart.ShoppingUtil.ShoppingItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "shopping-cart-list")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ShoppingCartList extends ShoppingItem {

    @Id
    private ObjectId _id;

    private String id;
}
