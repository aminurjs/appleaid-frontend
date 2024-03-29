import useAuth from "@/hooks/useAuth";
import useUser from "@/hooks/useUser";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { userRole, userLoading } = useUser();
  const location = useLocation();

  if (isLoading || userLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user && userRole === "admin") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
