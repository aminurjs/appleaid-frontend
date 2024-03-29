import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import { useRef, useState } from "react";
import { MobileNav } from "./MobileNav";
import UserProfile from "./UserProfile";
import { useOnClickOutside } from "@/hooks/onClickOutside";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const menuItems = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "Services",
    path: "/services",
    submenu: [
      {
        id: 3,
        name: "iPhone services",
        path: "/services/iphone",
      },
      { id: 4, name: "iPhone Repair", path: "/services/iphone/repair" },
      { id: 5, name: "iPad Repair", path: "/services/ipad/repair" },
      {
        id: 6,
        name: "Apple Watch Repair",
        path: "/services/apple-watch/repair",
      },
      {
        id: 7,
        name: "MacBook and iMac Repair",
        path: "/services/macbook-imac/repair",
      },
    ],
  },
  { id: 8, name: "Shop", path: "/shop" },
  { id: 9, name: "Blog", path: "/blog" },
  { id: 10, name: "About Us", path: "/about-us" },
  { id: 11, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { user } = useSelector((state) => state.userSlice);
  console.log(user);

  useOnClickOutside(navRef, () => setIsOpen(false));
  return (
    <header className="w-full py-5 sm:px10 px-5 border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" height={50} width={80} />
        </Link>
        <ul className="flex justify-center max-lg:hidden gap-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              {!item?.submenu ? (
                <NavLink
                  className="text-primary text-sm hover:text-red-2 font-semibold"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              ) : (
                <div ref={navRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center relative text-sm hover:text-red-2 font-semibold"
                  >
                    {item.name}{" "}
                    <ChevronDown
                      className={cn(" w-4 transition-all", {
                        "-rotate-180": isOpen,
                      })}
                    />
                  </button>
                  <ul
                    className={cn(
                      "absolute transition-all border-gray-100 border shadow-md rounded p-4 bg-white",
                      isOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 translate-y-5"
                    )}
                  >
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id}>
                        <NavLink
                          className="text-primary  text-sm hover:text-red-2 py-1.5 inline-block font-semibold"
                          to={subItem.path}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <form className="relative">
            <input
              className="bg-gray-50 border border-gray-100 rounded outline-none py-2 px-3 pr-12 w-40 md:w-60 text-sm focus:border-red-2"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <button
              className="absolute right-1 top-0.5 inline-block p-1.5 border border-gray-200 text-muted-foreground rounded"
              type="submit"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
          <div className="max-lg:hidden w-28">
            <UserProfile />
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
