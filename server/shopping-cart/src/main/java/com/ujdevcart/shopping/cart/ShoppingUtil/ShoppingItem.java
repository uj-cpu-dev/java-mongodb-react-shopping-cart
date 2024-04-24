package com.ujdevcart.shopping.cart.ShoppingUtil;

import lombok.*;

import java.util.List;
@Setter
@Getter
@NoArgsConstructor
public class ShoppingItem {

    private String product_name;

    private int rating;

    private String thumbnail;

    private int price;

    private List<String> thumbnail_colors;

    private int size;

    private List<ShoppingListReviews> reviews;

    private int itemCount;

    public ShoppingItem(String product_name, int rating, String thumbnail, int price, List<String> thumbnail_colors, int size, List<ShoppingListReviews> reviews, int itemCount) {
        this.product_name = product_name;
        this.rating = rating;
        this.thumbnail = thumbnail;
        this.price = price;
        this.thumbnail_colors = thumbnail_colors;
        this.size = size;
        this.reviews = reviews;
        this.itemCount = itemCount;
    }
}
