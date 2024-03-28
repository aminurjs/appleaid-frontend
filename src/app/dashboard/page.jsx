"use client";

import useAuth from "../../hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { userRole, isRoleLoading } = useAuth();
  const router = useRouter();
  if (isRoleLoading) {
    return (
      <div className="h-80 flex items-center justify-center">
        <Image
          height={80}
          width={80}
          className="animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
      </div>
    );
  }
  if (userRole.role === "user") {
    return router.push("/dashboard/profile", { scroll: false });
  } else if (userRole.role === "admin") {
    return router.push("/dashboard/admin", { scroll: false });
  } else {
    return router.push("/", { scroll: false });
  }
};

export default Dashboard;
