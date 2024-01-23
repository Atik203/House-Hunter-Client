import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "./../Components/ErrorPage/ErrorPage";
import Home from "./../Pages/Home/Home";
import Login from "./../Components/Login/Login";
import Register from "./../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";
import AddHouse from "../Pages/AddHouse/AddHouse";
import ManageHouse from "../Pages/ManageHouse/ManageHouse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="manage-house" replace />,
      },
      {
        path: "manage-house",
        element: <ManageHouse></ManageHouse>,
      },
      {
        path: "create-house",
        element: <AddHouse></AddHouse>,
      },
      {
        path: "update-house/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

export default router;
