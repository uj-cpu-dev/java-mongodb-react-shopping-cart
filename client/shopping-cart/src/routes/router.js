import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";

  
  export const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: "/:id",
        element: <h1>Each Cart Item Component</h1>
      },
  ]);