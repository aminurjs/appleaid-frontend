import useAuth from "@/hooks/useAuth";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { isLoading, user } = useAuth();

  return (
    <div>
      {isLoading ? (
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white"
          disabled
        >
          Loading...
        </button>
      ) : (
        <>
          {user ? (
            <Link to="/dashboard">
              <button className="w-full flex items-center justify-center py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white">
                <User className="h-5 w-5 mr-2" />
                Profile
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="w-full py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white">
                Login
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;
