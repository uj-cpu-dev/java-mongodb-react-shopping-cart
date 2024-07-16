import React from 'react'
import { useParams } from 'react-router-dom';
import useGetProduct from "../../api/getEachProduct";
import ShoppingItemImage from "./components/ShoppingItemImage";
import ShoppingItemDetails from "./components/ShoppingItemDetails";
import BackButton from "../../components/controls/BackButton";

const ShoppingItemPage = () => {
  const {id} = useParams();
  const {data, isLoading} = useGetProduct(id);

  if(isLoading){
      return <h1> Loading...</h1>
  }

  return (
      <>
      <BackButton />
        <div className={"shopping-item-page-container"}>
          <ShoppingItemImage thumbnail={data?.thumbnail} />
          <ShoppingItemDetails data={data} />
        </div>
      </>
  )
}

export default ShoppingItemPage