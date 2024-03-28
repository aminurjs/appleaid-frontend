"use client";
import useAuth from "../../hooks/useAuth";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    logout()
      .then(() => {
        //Logout
        router.push("/login", { scroll: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Button
      onClick={handleLogOut}
      className="flex gap-2 text-primary font-medium  items-center"
      variant="outline"
    >
      <LogOut /> Log Out
    </Button>
  );
};

export default LogOutButton;
