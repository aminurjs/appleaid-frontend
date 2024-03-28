import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronDown } from "lucide-react";
import { menuItems } from "./Navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignJustify className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <SheetHeader>
          <SheetTitle className="flex justify-center items-center flex-col p-8 bg-gray-100">
            <Link to="/">
              <img src="/assets/logo.png" alt="logo" height={80} width={100} />
            </Link>
            <div className="w-28 mt-4">
              <UserProfile />
            </div>
          </SheetTitle>
          <SheetDescription>
            <ol>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {!item?.submenu ? (
                    <Link
                      className="block w-full text-center py-3 bg-red-50 border-b border-gray-200 text-primary text-sm hover:text-red-2 font-semibold"
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full text-center py-3 bg-red-50 border-b border-gray-200  flex justify-center items-center relative text-sm hover:text-red-2 font-semibold"
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
                          " transition-all border-gray-100 border rounded  bg-white",
                          isOpen ? "block h-full" : "hidden h-0"
                        )}
                      >
                        {item.submenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              className="block w-full text-center py-2 bg-red-50 border-b border-gray-200 text-primary text-sm hover:text-red-2 font-semibold"
                              to={subItem.path}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="flex justify-center items-center mt-10">
          <Link to="/" className="block w-full">
            <Button
              className={cn(
                " w-full",
                buttonVariants({ variant: "secondary" })
              )}
            >
              Follow Social
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
