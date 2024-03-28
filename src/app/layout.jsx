import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import LoginForm from "./login/Login";
import SignUpForm from "./signin/SignIn";
import DashboardLayout from "./dashboard/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signin",
        element: <SignUpForm />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

export default routes;
