package com.ujdevcart.shopping.cart.ShoppingUtil;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class ShoppingListReviews {

    @Id
    private ObjectId _id;

    private Integer id;

    private String reviewer_name;

    private int reviewer_rating;

    private int liked;

    private int unliked;

    public ShoppingListReviews(Integer id, String reviewer_name, int reviewer_rating, int liked, int unliked) {
        this.id = id;
        this.reviewer_name = reviewer_name;
        this.reviewer_rating = reviewer_rating;
        this.liked = liked;
        this.unliked = unliked;
    }
}
