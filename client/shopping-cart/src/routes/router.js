import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import withPageLayout from "../HOC/withPageLayout";

const AppComponent = withPageLayout(App)
  
  export const router = createBrowserRouter([
      {
        path: "/",
        element: <AppComponent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/:id",
        element: <h1>Each Cart Item Component</h1>
      },
  ]);