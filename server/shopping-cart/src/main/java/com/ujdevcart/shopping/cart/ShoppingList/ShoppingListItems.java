package com.ujdevcart.shopping.cart.ShoppingList;

import com.ujdevcart.shopping.cart.ShoppingUtil.ShoppingItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@EqualsAndHashCode(callSuper = true)
@Document(collection = "shopping-list")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShoppingListItems extends ShoppingItem {
    @Id
    public ObjectId _id;

    private Integer id;
}
