import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import withPageLayout from "../HOC/withPageLayout";
import ShoppingItemPage from "../containers/ShoppingItemPage/ShoppingItemPage";
import Home from "../containers/Home/Home";

const HomeComponent = withPageLayout(Home);
const ShoppingItemComponent = withPageLayout(ShoppingItemPage);
  
  export const router = createBrowserRouter([
      {
        path: "/",
        element: <HomeComponent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/:id",
        element: <ShoppingItemComponent />
      },
  ]);