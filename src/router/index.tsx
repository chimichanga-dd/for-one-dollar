import { createBrowserRouter } from "react-router-dom";
import PageContent from "../atoms/pageContent";
import Drawings from "../pages/drawing";
import ErrorPage from "../pages/error";
import MainPage from "../pages/main";
import Writings from "../pages/writing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageContent color="orange">Main</PageContent>
      },

      {
        path: "drawings",
        element: <Drawings />
      },
      {
        path: "writings",
        element: <Writings />
      }
    ]
  }
]);

export default router;
