import UserProfile from "@/components/dashboard/UserProfile";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="p-5 bg-white">
        <h2 className="font-semibold text-2xl text-center text-red-2 mb-6">
          Welcome to AppleAid
        </h2>
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
