import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import LoginForm from "./login/Login";
import SignUpForm from "./signin/SignIn";
import DashboardLayout from "./dashboard/layout";
import Dashboard from "./dashboard/page";
import Posts from "./dashboard/posts/page";
import PostDetails from "./post/post";

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
        path: "/post/:id",
        element: <PostDetails />,
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
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/dashboard/posts",
            element: <Posts />,
          },
        ],
      },
    ],
  },
]);

export default routes;
