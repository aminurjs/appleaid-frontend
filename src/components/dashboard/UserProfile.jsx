"use client";

import useAuth from "../../hooks/useAuth";
import LogOutButton from "../logout/LogOut";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="py-5 flex flex-col items-center">
      <div>
        <h2 className="text-lg mb-2">Name: {user?.displayName}</h2>
        <h2>Email: {user?.email}</h2>
      </div>
      <div className="mt-10 flex justify-center">
        <LogOutButton />
      </div>
    </div>
  );
};

export default UserProfile;
