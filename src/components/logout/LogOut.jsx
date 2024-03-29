import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { Button } from "../ui/button";

const LogOutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout()
      .then(() => {
        //Logout
        navigate("/");
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
