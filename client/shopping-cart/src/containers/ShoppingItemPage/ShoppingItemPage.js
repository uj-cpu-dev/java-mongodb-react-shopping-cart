import React from 'react'
import { useParams } from 'react-router-dom';
import useGetProduct from "../../api/getEachProduct";
import ShoppingItemImage from "./components/ShoppingItemImage";
import ShoppingItemDetails from "./components/ShoppingItemDetails";

const ShoppingItemPage = () => {
  const {id} = useParams();
  const {data, isLoading, error} = useGetProduct(id);

  console.log(data)

  if(isLoading){
      return <h1> Loading...</h1>
  }

  return (
    <div className={"shopping-item-page-container"}>
      <ShoppingItemImage />
      <ShoppingItemDetails productName={data?.product_name} price={data?.price} />
    </div>
  )
}

export default ShoppingItemPage