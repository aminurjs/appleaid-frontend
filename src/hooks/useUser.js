import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useUser = () => {
  const axios = useAxios();
  const { user, isLoading } = useAuth();
  const [userLoading, setUserLoading] = useState(true);
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    if (!isLoading && !user) {
      setUserRole({ role: null });
      setUserLoading(false);
    }
    if (user) {
      axios
        .get(`/user/${user.email}`)
        .then(function (response) {
          const { role } = response.data;
          setUserRole({ role });
          setUserLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setUserRole({ role: null });
          setUserLoading(false);
        });
    }
  }, [user, axios, isLoading]);
  return {
    userRole,
    userLoading,
  };
};

export default useUser;
