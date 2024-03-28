import {
  AreaChart,
  BadgeHelp,
  Home,
  MessageSquareMore,
  NotebookPen,
  Settings2,
  ShoppingBasket,
  Truck,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const dashboardMenu = [
  {
    id: 1,
    title: "Home",
    icon: <Home />,
    link: "/dashboard/admin",
  },
  {
    id: 2,
    title: "Posts",
    icon: <NotebookPen />,
    link: "/dashboard/posts",
  },
  {
    id: 3,
    title: "Orders",
    icon: <ShoppingBasket />,
    link: "/dashboard/orders",
  },
  {
    id: 4,
    title: "Products",
    icon: <Truck />,
    link: "/dashboard/products",
  },
  {
    id: 5,
    title: "Analytics",
    icon: <AreaChart />,
    link: "/dashboard/analytics",
  },
  {
    id: 6,
    title: "Messages",
    icon: <MessageSquareMore />,
    link: "/dashboard/messages",
  },

  {
    id: 7,
    title: "Settings",
    icon: <Settings2 />,
    link: "/dashboard/settings",
  },
];
const userDashboardMenu = [
  {
    id: 1,
    title: "Profile",
    icon: <User />,
    link: "/dashboard/profile",
  },
  {
    id: 3,
    title: "Orders",
    icon: <ShoppingBasket />,
    link: "/dashboard/orders",
  },
  {
    id: 2,
    title: "Messages",
    icon: <MessageSquareMore />,
    link: "/dashboard/messages",
  },

  {
    id: 4,
    title: "Settings",
    icon: <Settings2 />,
    link: "/dashboard/settings",
  },
  {
    id: 5,
    title: "Help",
    icon: <BadgeHelp />,
    link: "/dashboard/help",
  },
];
const Menubar = () => {
  let role = "admin";

  return (
    <div className=" flex p-5 flex-col h-full justify-between">
      <div className=" flex gap-2 flex-col flex-1">
        {role === "user" &&
          userDashboardMenu.map((item) => (
            <Link
              className={`flex gap-2 text-primary font-medium hover:text-red-2 hover:underline p-2 bg-gray-100 rounded items-center 
              }`}
              to={item.link}
              key={item.id}
            >
              <span>{item.icon}</span>
              {item.title}
            </Link>
          ))}
        {role === "admin" &&
          dashboardMenu.map((item) => (
            <Link
              className={`flex gap-2 text-primary font-medium hover:text-red-2 hover:underline p-2 bg-gray-100 rounded items-center `}
              to={item.link}
              key={item.id}
            >
              <span>{item.icon}</span>
              {item.title}
            </Link>
          ))}
      </div>
      {/* <LogOutButton /> */}
    </div>
  );
};

export default Menubar;
