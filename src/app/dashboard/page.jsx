import useUser from "@/hooks/useUser";
import User from "./user/page";
import AdminDashboard from "./admin/page";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const Dashboard = () => {
  const { userRole, userLoading } = useUser();
  const { isLoading } = useAuth();
  const router = useNavigate();
  if (userLoading || isLoading) {
    return (
      <div className="h-80 flex items-center justify-center">
        <img
          height={80}
          width={80}
          className="animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
      </div>
    );
  }
  console.log(userRole);
  if (userRole.role === "user") {
    return <User />;
  } else if (userRole.role === "admin") {
    return <AdminDashboard />;
  } else {
    return router("/login");
  }
};

export default Dashboard;
