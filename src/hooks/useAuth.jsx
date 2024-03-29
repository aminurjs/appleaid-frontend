import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default useAuth;
