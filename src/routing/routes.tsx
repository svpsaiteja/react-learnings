import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "users",
            element: <UsersPage />,
            children: [{ path: ":id", element: <UserDetail /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
